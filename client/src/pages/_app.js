import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({subsets:['latin']})

export default function App({ Component, pageProps }) {
  return (
    <main className={workSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
