import Layout from "./components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return pageProps && pageProps.mainLayout ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
