import LandingPageNavbar from '@/app/(landing)/_component/Navbar/index'

type Props = {}

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen flex flex-col">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <LandingPageNavbar />
            </div>
            {children}
        </main>
    )
}

export default LandingLayout

