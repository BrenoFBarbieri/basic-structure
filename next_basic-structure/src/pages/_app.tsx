import type { AppProps } from 'next/app'

import GlobalStyled from './../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
      return (
            <>
                  <GlobalStyled />
                  <Component {...pageProps} />
            </>
      )
}

export default MyApp
