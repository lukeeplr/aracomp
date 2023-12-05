import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mini Curso ARACOMP 2023',
  description: 'Front-end com NextJs' 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`bg-[#1E1E1E] text-white ${inter.className}`}>{children}</body>
    </html>
  )
}
