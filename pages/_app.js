import SiteLayout from './components/site-layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  </>
}

export default MyApp
