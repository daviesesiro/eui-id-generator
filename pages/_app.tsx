import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Edo University ID card generator</title>
        <meta
          name="description"
          content="Quickly generate edo university ID card"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
