import App from 'next/app';
import Head from 'next/head'
import React from "react";







class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {

        return {
            pageProps: {
                ...(Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {})
            }
        };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <>
            <Head>
            <link href="/css/fontawesome/css/all.min.css" rel="stylesheet"/>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            </Head>
        <Component {...pageProps} />
        </>
        );
    }
}

export default MyApp;