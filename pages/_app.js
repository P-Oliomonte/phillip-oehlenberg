import "@/styles/globals.css";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [page, setPage] = useLocalStorageState("page", {
    defaultValue: "home",
  });

  function handlePageChange(page) {
    setPage(page);
  }

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Layout page={page}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
