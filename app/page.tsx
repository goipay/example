import { FooterTabs } from '@/app/components/footer'
import TabsPage from './components/main'

export default function Main() {
    return (
        <div className="container mx-auto p-4">
            <TabsPage />
            <FooterTabs />
        </div>
    )
}
