import { Invoice } from '@/lib/utils'
import { InvoiceCard } from './invoice-card'

interface InvoicesPageTabProps {
    header: string
    invoices: Invoice[]
}

export function InvoicesPageTab({ header, invoices }: InvoicesPageTabProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{header}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {invoices.map((invoice) => (
                    <InvoiceCard key={invoice.id} invoice={invoice} />
                ))}
            </div>
        </div>
    )
}
