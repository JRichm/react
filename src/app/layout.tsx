import MainHeader from '@/components/header'
import { Inter } from 'next/font/google' // built in google fonts

const inter = Inter({ subsets: ['latin'] })
const classN = `${inter.className} w-full`

export const metadata = {
  title: 'Calendar'
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className={classN} >{children}</body>
    </html>
  )
}

