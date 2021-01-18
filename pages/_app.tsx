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
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
