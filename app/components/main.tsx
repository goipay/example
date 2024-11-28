'use client'

import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { InvoicesPageTab } from '@/app/components/invoice-page-tab'
import { Invoice as InvoiceGrpc, InvoiceStatusType } from '@/generated/goipay/invoice_pb'
import { mapInvoiceAsObjectToInvoice, Invoice } from '@/lib/utils'

const tabs = [
    { val: 'tab1', label: '🕛 Pending', header: 'Pending Invoices', status: InvoiceStatusType.PENDING },
    { val: 'tab2', label: '🔄 Mempool', header: 'Pending Mempool Invoices', status: InvoiceStatusType.PENDING_MEMPOOL },
    { val: 'tab3', label: '✅ Confirmed', header: 'Confirmed Invoices', status: InvoiceStatusType.CONFIRMED },
    { val: 'tab4', label: '❌ Expired', header: 'Expired Invoices', status: InvoiceStatusType.EXPIRED },
]

export default function TabsPage() {
    const [invoices, setInvoices] = useState<Invoice[]>([])

    const [activeTab, setActiveTab] = useState('tab1')
    const [unreadTabs, setUnreadTabs] = useState<string[]>([])

    function updateUnread(status: InvoiceStatusType) {
        tabs.filter((t) => t.status === status && t.val !== activeTab).forEach((t) => setUnreadTabs((prev) => [...prev, t.val]))
    }

    useEffect(() => {
        const sse = new EventSource('/api/socket')

        sse.onopen = () => {
            console.log('Connected to SSE')
        }
        sse.addEventListener('new-invoice', (e) => {
            const invoice = JSON.parse(e.data) as InvoiceGrpc.AsObject
            setInvoices((prev) => [mapInvoiceAsObjectToInvoice(invoice), ...prev.filter((i) => i.id !== invoice.id)])
        })
        sse.onerror = (e) => {
            console.error('SSE connection error:', e)
        }

        return () => {
            sse.close()
            console.log('SSE connection closed')
        }
    }, [])

    useEffect(() => {
        if (invoices.length !== 0) updateUnread(invoices[0].status)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [invoices])

    useEffect(() => {
        setUnreadTabs((prev) => prev.filter((t) => t !== activeTab))
    }, [activeTab])

    return (
        <>
            <h1 className="text-2xl font-bold">Simple Invoice Dashboard</h1>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    {tabs.map((tab) => (
                        <TabsTrigger key={tab.val} value={tab.val} className={unreadTabs.find((t) => t === tab.val) && 'font-bold'}>
                            <span className="flex items-center gap-1">
                                {tab.label}
                                {unreadTabs.find((t) => t === tab.val) && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
                            </span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((t) => (
                    <TabsContent key={t.val} value={t.val} className="h-[calc(100vh-250px)] overflow-auto">
                        <InvoicesPageTab header={t.header} invoices={invoices.filter((i) => i.status === t.status)} />
                    </TabsContent>
                ))}
            </Tabs>
        </>
    )
}
