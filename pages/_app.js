import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import Head from "next/head";
import {
  illustrationImagesData,
  webDesignImagesData,
  printImagesData,
  logoImagesData,
  packagingImagesData,
} from "@/lib/images-data";

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

  function handleNextImage(event, largeImage) {
    event.stopPropagation();
    const currentCategory = largeImage.imageId.includes("Illustration")
      ? illustrationImagesData
      : largeImage.imageId.includes("WebDesign")
      ? webDesignImagesData
      : largeImage.imageId.includes("Print")
      ? printImagesData
      : largeImage.imageId.includes("Logos")
      ? logoImagesData
      : packagingImagesData;

    const currentIndex = currentCategory.findIndex(
      (image) => image.imageId === largeImage.imageId
    );
    const nextIndex = (currentIndex + 1) % currentCategory.length;
    setLargeImage(currentCategory[nextIndex]);
  }

  function handlePrevImage(event, largeImage) {
    event.stopPropagation();

    const currentCategory = largeImage.imageId.includes("Illustration")
      ? illustrationImagesData
      : largeImage.imageId.includes("WebDesign")
      ? webDesignImagesData
      : largeImage.imageId.includes("Print")
      ? printImagesData
      : largeImage.imageId.includes("Logos")
      ? logoImagesData
      : packagingImagesData;

    const currentIndex = currentCategory.findIndex(
      (image) => image.imageId === largeImage.imageId
    );
    const prevIndex =
      (currentIndex - 1 + currentCategory.length) % currentCategory.length;
    setLargeImage(currentCategory[prevIndex]);
  }

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Layout
        largeImage={largeImage}
        showLargeImage={showLargeImage}
        handleshowLargeImage={handleshowLargeImage}
        illustrationImagesData={illustrationImagesData}
        webDesignImagesData={webDesignImagesData}
        printImagesData={printImagesData}
        logoImagesData={logoImagesData}
        packegingImagesData={packagingImagesData}
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
      >
        <Component
          {...pageProps}
          handleshowLargeImage={handleshowLargeImage}
          illustrationImagesData={illustrationImagesData}
          webDesignImagesData={webDesignImagesData}
          printImagesData={printImagesData}
          logoImagesData={logoImagesData}
          packegingImagesData={packagingImagesData}
        />
      </Layout>
    </>
  );
}
