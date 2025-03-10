import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Computer Science Graduate & Web Developer',
  description: 'Portfolio showcasing my projects, skills, and experience in computer science and web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen`}>
        <Navbar />
        <main className="container mx-auto px-4 pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
