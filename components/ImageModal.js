import Image from "next/image";
import { styled } from "styled-components";
import IconRight from "@/public/Icons/Icon_Right.svg";
import IconLeft from "@/public/Icons/Icon_Left.svg";

export default function ImageModal({
  largeImage,
  onShowLargeImage,
  onNextImage,
  onPrevImage,
}) {
  function handleNextImageClick(event) {
    event.stopPropagation();
    onNextImage(largeImage);
  }

  function handlePrevImageClick(event) {
    event.stopPropagation();
    onPrevImage(largeImage);
  }
  return (
    <Overlay onClick={onShowLargeImage}>
      <ImageWrapper>
        <StyledImageContainer>
          <StyledImage
            src={largeImage.imageUrl}
            layout="responsive"
            width={largeImage.width}
            height={largeImage.height}
            alt={largeImage.alt}
          />
        </StyledImageContainer>
        <StyledImageTitle>{largeImage.imageTitle}</StyledImageTitle>
        <ButtonContainer>
          <StyledRoundButton
            onClick={(event) => handlePrevImageClick(event, largeImage)}
          >
            {" "}
            <IconLeft />
          </StyledRoundButton>
          <StyledRoundButton
            onClick={(event) => handleNextImageClick(event, largeImage)}
          >
            <IconRight />
          </StyledRoundButton>
        </ButtonContainer>
      </ImageWrapper>
    </Overlay>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  height: auto;
  max-height: 94vh;
  width: 94vw;
  border-radius: 0 0 8px 8px;
  background-color: #fff;
  border: 3px solid #000;
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
`;

const StyledRoundButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: 6px;
  pointer-events: auto;
`;

const StyledImageTitle = styled.p`
  color: #000;
  padding: 8px;
  border-top: 2px solid #000;
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
