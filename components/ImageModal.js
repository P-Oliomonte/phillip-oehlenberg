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
  return (
    <Overlay onClick={onShowLargeImage}>
      <ImageWrapper>
        <StyledImageContainer>
          <StyledImage src={largeImage.imageUrl} alt={largeImage.alt} />
        </StyledImageContainer>
        <StyledImageTitle>{largeImage.imageTitle}</StyledImageTitle>
        <ButtonContainer>
          <StyledRoundButton
            onClick={(event) => onPrevImage(event, largeImage)}
          >
            {" "}
            <IconLeft />
          </StyledRoundButton>
          <StyledRoundButton
            onClick={(event) => onNextImage(event, largeImage)}
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
  margin-left: 12px;
  margin-right: 12px;
  max-width: 900px;
  border-radius: 0 0 8px 8px;
  background-color: #000;
  border: 3px solid #000;
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 80vh;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;

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
  background-color: #fff;
  padding: 8px;
  border-top: 2px solid #000;
  border-radius: 0 0 5px 5px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000eb;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
