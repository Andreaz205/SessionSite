import Layout from "@/src/pages/layout/layout";
import '../styles/globals.css'
import {AppProps} from "next/app";
import {NextPage} from "next";

const App: NextPage<AppProps> = (props: AppProps) => {
    return <>
        <Layout>
            <props.Component {...props.pageProps} />
        </Layout>
    </>;
}

export default App;