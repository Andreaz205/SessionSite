import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ru">
            <Head></Head>
            <body>
            <Main />
            <div
                id="modal_wrapper"
                className="absolute w-0 h-0 top-0 left-0 z-[1000]"
            ></div>
            <NextScript />
            </body>
        </Html>
    );
}