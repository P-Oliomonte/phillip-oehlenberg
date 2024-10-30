import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [showLargeImage, setShowLargeImage] = useState(false);
  const [largeImage, setLargeImage] = useState({});

  function handleshowLargeImage(image) {
    if (showLargeImage) {
      setShowLargeImage(false);
      setLargeImage({});
    } else {
      setLargeImage(image);
      setShowLargeImage(true);
    }
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && showLargeImage) {
        setShowLargeImage(false);
        setLargeImage({});
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showLargeImage]);

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Layout
        largeImage={largeImage}
        showLargeImage={showLargeImage}
        handleshowLargeImage={handleshowLargeImage}
      >
        <Component {...pageProps} handleshowLargeImage={handleshowLargeImage} />
      </Layout>
    </>
  );
}
