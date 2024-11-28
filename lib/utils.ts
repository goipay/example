import { CoinType } from '@/generated/goipay/crypto_pb'
import { Invoice as InvoiceGrpc, InvoiceStatusType } from '@/generated/goipay/invoice_pb'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface Invoice {
    id: string
    address: string
    requiredAmount: number
    actualAmount: number
    status: InvoiceStatusType
    confirmationsRequired: number
    coin: CoinType
    createdAt: Date
    confirmedAt?: Date
    expiresAt: Date
    txId: string
    userId: string
}

export function mapCoinTypeToStr(coin: CoinType): string {
    switch (coin) {
        case CoinType.XMR:
            return 'XMR'
        case CoinType.BTC:
            return 'BTC'
        case CoinType.LTC:
            return 'LTC'
        case CoinType.ETH:
            return 'ETH'
        case CoinType.TON:
            return 'TON'
    }
}

export function mapInvoiceStatusTypeToStr(status: InvoiceStatusType): string {
    switch (status) {
        case InvoiceStatusType.PENDING:
            return 'PENDING'
        case InvoiceStatusType.PENDING_MEMPOOL:
            return 'PENDING_MEMPOOL'
        case InvoiceStatusType.EXPIRED:
            return 'EXPIRED'
        case InvoiceStatusType.CONFIRMED:
            return 'CONFIRMED'
    }
}

export function mapInvoiceAsObjectToInvoice(invoice: InvoiceGrpc.AsObject): Invoice {
    const createdAt = invoice.createdat as { seconds: number; nanos: number }
    const confirmedAt = invoice.status === InvoiceStatusType.CONFIRMED ? (invoice.confirmedat as { seconds: number; nanos: number }) : undefined
    const expiresAt = invoice.expiresat as { seconds: number; nanos: number }

    return {
        id: invoice.id,
        address: invoice.cryptoaddress,
        requiredAmount: invoice.requiredamount,
        actualAmount: invoice.actualamount,
        coin: invoice.coin,
        status: invoice.status,
        confirmationsRequired: invoice.confirmationsrequired,
        createdAt: new Date(createdAt.seconds * 1000 + createdAt.nanos / 1000000),
        confirmedAt: confirmedAt && new Date(confirmedAt.seconds * 1000 + confirmedAt.nanos / 1000000),
        expiresAt: new Date(expiresAt.seconds * 1000 + expiresAt.nanos / 1000000),
        txId: invoice.txid,
        userId: invoice.userid,
    }
}

export function getEnvOrThrow(envName: string): string {
    return (
        process.env[envName] ||
        (() => {
            throw new Error(`Missing ${envName} env var`)
        })()
    )
}

declare global {
    interface Number {
        roundFloat(precision?: number): number
    }
}

// always rounds up to the nearest float
Number.prototype.roundFloat = function (precision: number) {
    if (precision <= 0) return this.valueOf()

    const pow = Math.pow(10, precision)
    return Math.ceil(this.valueOf() * pow) / pow
}
