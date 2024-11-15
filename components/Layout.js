import Navigation from "./Navigantion";
import ImageModal from "./ImageModal";
import Footer from "./Footer";
import styled from "styled-components";

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
      <StyledMain>
        {children}
        <Footer />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
