import MainHeader from '@/components/header'
import { Inter } from 'next/font/google' // built in google fonts

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calendar'
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className={`${inter.className} container w-full`} >{children}</body>
    </html>
  )
}

