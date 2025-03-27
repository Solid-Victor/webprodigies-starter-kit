import { ThemeProvider } from "@/components/theme"
import { ReactQueryProvider } from "@/react-query/provider"
import { ReduxProvider } from "@/redux/provider"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { headers } from 'next/headers'
import { Toaster } from "sonner"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Skool Manager",
    description: "A School Management System",
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    // Properly await headers if you need them
    const headersList = await headers()
    
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={jakarta.className}>
                <ClerkProvider>
                    <ReduxProvider>
                        <ReactQueryProvider>
                            <ThemeProvider
                                attribute="class"
                                defaultTheme="dark"
                                enableSystem={false}
                                disableTransitionOnChange
                                storageKey="skool-theme"
                            >
                                <main>
                                    {children}
                                </main>
                                <Toaster richColors />
                            </ThemeProvider>
                        </ReactQueryProvider>   
                    </ReduxProvider>
                </ClerkProvider>
            </body>
        </html>
    )
}