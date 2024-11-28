import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Simple Invoice Dashboard',
    description: 'The app that shows an example of using GoiPay',
    icons: {
        icon: '/logo/goipay-logo.svg',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}
