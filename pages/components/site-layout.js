import Header from './header'
import Body from './body'
import Footer from './footer'

const SiteLayout = ({children}) => {
    return <>
        <Header />
        <Body>{children}</Body>
        <Footer />
    </>
}

export default SiteLayout