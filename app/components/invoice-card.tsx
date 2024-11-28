'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { mapCoinTypeToStr, Invoice } from '@/lib/utils'
import { useState } from 'react'

interface InvoiceProps {
    invoice: Invoice
}

export function InvoiceCard({ invoice }: InvoiceProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <>
            <Card key={invoice.id} className="hover:cursor-pointer" onClick={() => setIsDialogOpen(true)}>
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">{invoice.id}</CardTitle>
                    <CardDescription>Invoice Details</CardDescription>
                </CardHeader>
                <CardContent>
                    <dl className="grid grid-cols-2 gap-1 text-sm">
                        <dt className="font-semibold">Address:</dt>
                        <dd className="truncate">{invoice.address}</dd>

                        <dt className="font-semibold">Required Amount:</dt>
                        <dd>{invoice.requiredAmount.roundFloat(8) + ' ' + mapCoinTypeToStr(invoice.coin)}</dd>
                        <dt className="font-semibold">Actual Amount:</dt>
                        <dd>{invoice.actualAmount.roundFloat(9) + ' ' + mapCoinTypeToStr(invoice.coin)}</dd>
                        <dt className="font-semibold">Confirmations Required:</dt>
                        <dd>{invoice.confirmationsRequired}</dd>

                        <dt className="font-semibold">Created:</dt>
                        <dd>{invoice.createdAt.toLocaleString()}</dd>
                        <dt className="font-semibold">Confirmed:</dt>
                        <dd>{invoice.confirmedAt?.toLocaleString() || 'null'}</dd>
                        <dt className="font-semibold">Expires:</dt>
                        <dd>{invoice.expiresAt.toLocaleString()}</dd>

                        <dt className="font-semibold">TxId:</dt>
                        <dd className="truncate">{!invoice.txId ? 'null' : invoice.txId}</dd>
                    </dl>
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Invoice Details: {invoice.id}</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Basic Information</h3>
                            <dl className="grid grid-cols-2 gap-2 text-sm">
                                <dt className="font-semibold">Address:</dt>
                                <dd className="break-all">{invoice.address}</dd>
                                <dt className="font-semibold">Required Amount:</dt>
                                <dd>{invoice.requiredAmount.roundFloat(8) + ' ' + mapCoinTypeToStr(invoice.coin)}</dd>
                                <dt className="font-semibold">Actual Amount:</dt>
                                <dd>{invoice.actualAmount.roundFloat(9) + ' ' + mapCoinTypeToStr(invoice.coin)}</dd>
                                <dt className="font-semibold">Confirmations Required:</dt>
                                <dd>{invoice.confirmationsRequired}</dd>
                            </dl>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Timestamps</h3>
                            <dl className="grid grid-cols-2 gap-2 text-sm">
                                <dt className="font-semibold">Created:</dt>
                                <dd>{invoice.createdAt.toLocaleString()}</dd>
                                <dt className="font-semibold">Confirmed:</dt>
                                <dd>{invoice.confirmedAt?.toLocaleString() || 'Not confirmed'}</dd>
                                <dt className="font-semibold">Expires:</dt>
                                <dd>{invoice.expiresAt?.toLocaleString()}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Transaction ID</h3>
                        <p className="text-sm break-all">{invoice.txId || 'No transaction ID'}</p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
