import './globals.css'
import '../../styles/main.min.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Poppins } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
// rafce

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})
const playfair = Playfair_Display({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})


export const metadata: Metadata = {
  title: 'NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${poppins.className} ${inter.className}`}>
        <Navbar />
        <main className='main-body'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
