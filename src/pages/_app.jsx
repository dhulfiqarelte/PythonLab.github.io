import Head from 'next/head'
import '@/styles/globals.css'
import Navbar from '@/pages/navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Python ELTE</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}