import './globals.css'
import { Outfit } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Providers } from '@/components/Providers'

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Abdullah Yakub | Portfolio',
  description: 'Portfolio showcasing my projects, skills, and experience in computer science and web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen`}>
        <Providers>
          <Navbar />
          <main className="container mx-auto px-4 pt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
