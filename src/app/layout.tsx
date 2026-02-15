import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'

const archivo = Archivo({ subsets: ['latin'] })

const baseUrl = 'https://josh-thompson.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Josh Thompson',
    template: '%s | Josh Thompson',
  },
  description:
    'Personal portfolio of Josh Thompson — MSci Maths & Computer Science at Durham, interests in autonomous systems, RL, and AI. Projects, experience, and contact.',
  keywords: ['Josh Thompson', 'portfolio', 'Durham University', 'Armature Labs', 'data science', 'machine learning'],
  authors: [{ name: 'Josh Thompson', url: baseUrl }],
  creator: 'Josh Thompson',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: baseUrl,
    siteName: 'Josh Thompson',
    title: 'Josh Thompson',
    description: 'Personal portfolio — Maths & CS, autonomous systems, RL, AI. Projects and contact.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josh Thompson',
    description: 'Personal portfolio — Maths & CS, autonomous systems, RL, AI.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="About JT" />
        <meta name="application-name" content="About JT" />
      </head>
      <body className={archivo.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className="outline-border rounded-base w-full max-w-[1000px] w600:grid-cols-[70px_minmax(0,1fr)] w500:grid-cols-1 grid h-[800px] max-h-[100dvh] min-h-0 grid-cols-[100px_minmax(0,1fr)] shadow-[10px_10px_0_0_#000] outline-4 portrait:h-[100dvh] portrait:max-h-[100dvh]">
            <header className="border-r-border rounded-l-base bg-main w500:hidden relative flex items-center justify-center border-r-4 portrait:rounded-none">
              <h1 className="smallHeight:text-[30px] smallHeight:tracking-[2px] w600:text-[30px] w600:tracking-[2px] -rotate-90 text-[40px] font-bold tracking-[4px] whitespace-nowrap">
                <span className="text-main-foreground inline-block">
                  Josh Thompson
                </span>
              </h1>
            </header>
            <main className="rounded-br-base rounded-tr-base bg-background relative flex min-h-0 h-[800px] max-h-[100dvh] flex-col font-semibold portrait:h-[100dvh] portrait:max-h-[100dvh] portrait:rounded-none">
              <Nav />
              <div className="main h-full max-h-[750px] min-w-0 overflow-y-auto overflow-x-hidden portrait:max-h-[calc(100dvh-50px)]">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
