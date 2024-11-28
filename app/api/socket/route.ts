import { InvoiceStatusStreamRequest, InvoiceStatusStreamResponse } from '@/generated/goipay/invoice_pb'
import { invoiceGrpcClient } from '@/lib/grpc-clients'

const encoder = new TextEncoder()
const connectedClients = new Set<WritableStreamDefaultWriter>()

function broadcast(message: string) {
    Array.from(connectedClients).forEach((client) => {
        client.write(encoder.encode(message)).catch((err) => {
            console.error('Error writing to client:', err)
            connectedClients.delete(client)
        })
    })
}

const stream = invoiceGrpcClient.invoiceStatusStream(new InvoiceStatusStreamRequest())
stream.on('data', (invRes: InvoiceStatusStreamResponse) => {
    broadcast(`event: new-invoice\ndata: ${JSON.stringify(invRes.getInvoice()?.toObject())}\n\n`)
})

export async function GET() {
    const clientStream = new TransformStream()
    const writer = clientStream.writable.getWriter()
    connectedClients.add(writer)

    writer.write(encoder.encode('event: connected\ndata: keepalive\n\n')).catch(() => {
        connectedClients.delete(writer)
    })

    return new Response(clientStream.readable, {
        headers: {
            'Content-Type': 'text/event-stream',
            Connection: 'keep-alive',
            'Cache-Control': 'no-cache, no-transform',
        },
    })
}
