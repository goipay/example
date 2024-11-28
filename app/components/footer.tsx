import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { invoiceGrpcClient } from '@/lib/grpc-clients'
import { CreateInvoiceRequest, CreateInvoiceResponse } from '@/generated/goipay/invoice_pb'
import { userId } from '@/lib/const'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CoinType } from '@/generated/goipay/crypto_pb'
import { mapCoinTypeToStr } from '@/lib/utils'
import { promisify } from 'util'

export function FooterTabs() {
    async function handleNewInvoiceSubmit(formData: FormData) {
        'use server'
        const createInvoicePromise = promisify(invoiceGrpcClient.createInvoice.bind(invoiceGrpcClient)) as (
            request: CreateInvoiceRequest
        ) => Promise<CreateInvoiceResponse>

        const userId = formData.get('userId') as string
        const amount = formData.get('amount') as string
        const confirmations = formData.get('confirmations') as string
        const timeout = formData.get('timeout') as string
        if (!amount || !confirmations || !userId || !timeout) return

        try {
            await createInvoicePromise(
                new CreateInvoiceRequest()
                    .setUserid(userId)
                    .setCoin(CoinType.XMR)
                    .setAmount(parseFloat(amount))
                    .setConfirmations(parseInt(confirmations))
                    .setTimeout(parseInt(timeout))
            )
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="mt-8 border-t pt-4 flex flex-col">
            <h2>💵 Create Invoice</h2>
            <form action={handleNewInvoiceSubmit} className="flex flex-col">
                <Label htmlFor="userId">User ID</Label>
                <Input required type="text" name="userId" readOnly defaultValue={userId} />

                <Label htmlFor="amount">Amount</Label>
                <Input
                    required
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    defaultValue={0.00001}
                    step={0.000001}
                    min={0.00001}
                    max={180_000_000_000}
                />

                <Label htmlFor="coin">Coin</Label>
                <Select required name="coin" defaultValue={mapCoinTypeToStr(CoinType.XMR)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Coin Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem key={CoinType.XMR} value={mapCoinTypeToStr(CoinType.XMR)}>
                            {mapCoinTypeToStr(CoinType.XMR)}
                        </SelectItem>
                    </SelectContent>
                </Select>

                <Label htmlFor="confirmations">Confirmations</Label>
                <Input required type="number" name="confirmations" placeholder="Confirmations" defaultValue={0} step={1} min={0} max={100} />

                <Label htmlFor="timeout">Timeout (in sec)</Label>
                <Input required type="number" name="timeout" placeholder="Timeout (in sec)" defaultValue={60} step={1} min={0} max={600_000} />

                <Button type="submit">Create</Button>
            </form>
        </div>
    )
}
