import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import Head from "next/head";

const workSans = Work_Sans({subsets:['latin']})

export default function App({ Component, pageProps }) {
  return (
    <main className={workSans.className} >
      <Head>
        <link rel="shortcut icon" href="/Assets/favicon.ico"/>
        <title>Gig Magnet | Home</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </main>
  );
}
