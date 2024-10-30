import Navigation from "./Navigantion";
import ImageModal from "./ImageModal";

export default function Layout({
  children,
  showLargeImage,
  handleshowLargeImage,
  largeImage,
}) {
  return (
    <>
      {showLargeImage && (
        <ImageModal
          largeImage={largeImage}
          onShowLargeImage={handleshowLargeImage}
        />
      )}
      <Navigation />
      <main>{children}</main>
    </>
  );
}
