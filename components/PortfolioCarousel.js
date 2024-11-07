import { useCallback } from "react";
import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import IconRight from "@/public/Icons/Icon_Right.svg";
import IconLeft from "@/public/Icons/Icon_Left.svg";

export default function PortfolioCarousel({ images, title, onShowLargeImage }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <CategoryTitle>{title}</CategoryTitle>

      <CarouselContainer ref={emblaRef}>
        <ScrollBody>
          {images.map((image) => (
            <Slide key={image.imageId}>
              <StyledImage
                src={image.imageUrl}
                alt={image.alt}
                onClick={() => onShowLargeImage(image)}
              />
            </Slide>
          ))}
        </ScrollBody>
        <ButtonContainer>
          <StyledRoundButton className="embla__prev" onClick={scrollPrev}>
            <IconLeft />
          </StyledRoundButton>
          <StyledRoundButton className="embla__next" onClick={scrollNext}>
            <IconRight />
          </StyledRoundButton>
        </ButtonContainer>
      </CarouselContainer>
    </div>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: #000;
  padding: 20px;
  padding-top: 0;
  position: relative;

  @media screen and (min-width: 1104px) {
    border-left: 3px solid #000;
    border-right: 3px solid #000;
  }
`;

const ScrollBody = styled.div`
  display: flex;
  align-items: center;
  cursor: grab;
`;

const Slide = styled.button`
  border: none;
  background-color: #000;
  position: relative;
  margin-left: 20px;
  height: 220px;

  @media screen and (min-width: 600px) {
    height: 280px;
  }

  @media screen and (min-width: 800px) {
    height: 340px;
  }
`;

const StyledImage = styled.img`
  width: auto;
  height: 100%;
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

const CategoryTitle = styled.h2`
  color: #fff;
  background-color: #000;
  padding: 10px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;
