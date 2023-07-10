import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import Head from "next/head";
import { StateProvider } from "@/context/StateContext";
import { initialState, reducer } from "@/context/StateReducers";
import { Signin, Signup } from "@/components/Auth";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={workSans.className}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Head>
          <link rel="shortcut icon" href="/Assets/favicon.ico" />
          <title>Gig Magnet | Home</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
          <Signin/>
          <Signup/>
        </Layout>
      </StateProvider>
    </main>
  );
}
