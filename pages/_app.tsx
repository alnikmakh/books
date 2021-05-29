import '../styles/globals.css'
import {Layout} from "../components/layout";
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
