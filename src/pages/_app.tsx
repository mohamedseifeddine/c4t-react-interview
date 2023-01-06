import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalLayout from '~/components/common/GlobalLayout'

/**
 * MSW implementation
 */
// require is needed here to load the mocks before any rendering happens
// eslint-disable-next-line global-require
require('~/mocks')

const App = ({ Component, pageProps }: AppProps) => (
  <GlobalLayout>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </Head>
    <Component {...pageProps} />
  </GlobalLayout>
)

export default App
