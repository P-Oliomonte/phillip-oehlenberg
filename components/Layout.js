import Navigation from "./Navigantion";
import ImageModal from "./ImageModal";

export default function Layout({
  children,
  showLargeImage,
  handleshowLargeImage,
  largeImage,
  handleNextImage,
  handlePrevImage,
}) {
  return (
    <>
      {showLargeImage && (
        <ImageModal
          largeImage={largeImage}
          onShowLargeImage={handleshowLargeImage}
          onNextImage={handleNextImage}
          onPrevImage={handlePrevImage}
        />
      )}
      <Navigation />
      <main>{children}</main>
    </>
  );
}
