import './globals.css'
import { Poppins } from 'next/font/google'
// Components
import ClientOnly from '@/components/ClientOnly'
import Navbar from '@/components/navbar'
import NavbarMenu from '@/components/modals/NavbarMenuModal'

export const metadata = {
  title: 'Mucahit | Stealim',
  description: 'Mucahit tasan portfolio website',
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/favicon.png" />
      </head>
      <body className={poppins.className}>
        <ClientOnly>
          <Navbar />
          <NavbarMenu />
        </ClientOnly>
        <div className='pt-16 min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
