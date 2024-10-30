import Image from "next/image";
import styled from "styled-components";

export default function ImageModal({ largeImage, onShowLargeImage }) {
  return (
    <Overlay onClick={onShowLargeImage}>
      <ImageWrapper>
        <StyledImage
          src={largeImage.imageUrl}
          layout="responsive"
          width={largeImage.width}
          height={largeImage.height}
          alt={largeImage.alt}
        />
      </ImageWrapper>
    </Overlay>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  height: auto;
  width: 94%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000aa;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
