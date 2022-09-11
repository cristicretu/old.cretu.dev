import '../styles/globals.css'
import '../styles/prose.css'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { NextPageContext } from 'next/types'

import Layout from '@components/Layout'
import { Providers } from '@components/Providers'

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (
    page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
  ) => (
    <ThemeProvider disableTransitionOnChange attribute='class'>
      <Providers pageProps={pageProps as NextPageContext}>
        <Layout>{page}</Layout>
      </Providers>
    </ThemeProvider>
  )

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
