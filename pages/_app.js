import "@/styles/globals.css";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [page, setPage] = useLocalStorageState("page", {
    defaultValue: "home",
  });

  function handlePageChange(page) {
    setPage(page);
  }

  return (
    <Layout page={page} onPageChange={handlePageChange}>
      <Component {...pageProps} onPageChange={handlePageChange} />
    </Layout>
  );
}
