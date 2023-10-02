import Layout from "@/src/pages/layout/layout";
import '../styles/globals.css'
import {AppProps} from "next/app";
import {NextPage} from "next";
import {ScreenProvider} from "@/src/shared/providers";

const App: NextPage<AppProps> = (props: AppProps) => {
    return <ScreenProvider>
        <Layout>
            <props.Component {...props.pageProps} />
        </Layout>
    </ScreenProvider>;
}

export default App;