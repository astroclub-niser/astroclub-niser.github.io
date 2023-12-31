import { Inter, Playfair_Display, Josefin_Sans } from 'next/font/google'
import './globals.css'
import '../../styles/main.min.css'
import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import localFont from 'next/font/local'
// rafce

const josefin_sans = Josefin_Sans({
  weight: ['300', '400'],
  subsets: ['latin'],
  // display: 'swap',
})

const inter = Inter({ subsets: ['latin'] })
const dinnFont = localFont({ src: '../fonts/DINNeuzeitGrotesk.ttf', weight: '400', variable: '--font-dinn' })
const futuraLightFont = localFont({ src: '../fonts/Futura-Lt-Light.ttf', weight: '300', variable: '--font-futura-lt' })
//const futuraBookFont = localFont({ src: '../fonts/Futura-Lt-Book.ttf', weight:'400', variable: '--font-futura-book' })

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
    <html lang="en" className={`${josefin_sans.className} ${inter.className} ${futuraLightFont.variable} ${dinnFont.variable}`}>
      {/* <style jsx global>{`
        html {
          font-family: ${josefin_sans.style.fontFamily};
        }
      `}</style> */}
      <body>
        <Navbar />
        <main className='main-body'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
