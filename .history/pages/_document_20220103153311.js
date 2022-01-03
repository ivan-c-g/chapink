import { Main, NextScript } from "next/document";
import Head from "next/head";

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Returns an object like: { html, head, errorHtml, chunks, styles }     
        return renderPage();
    }

    render() {
        return (
            <html>
                <Head>
                    <title>My page</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}