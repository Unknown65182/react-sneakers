import "reseter.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

import Layout from "../layouts";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5 shrink-to-fit=no"
        />
        <meta name="description" content="Sneakers store" />
        <link
          rel="canonical"
          href={`https://toxin.vercel.app${router.pathname}`}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
