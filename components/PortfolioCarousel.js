import { useCallback } from "react";
import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function PortfolioCarousel({ images }) {
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
    <CarouselContainer ref={emblaRef}>
      <ScrollBody>
        {images.map((image) => (
          <Slide key={image.imageId}>
            <StyledImage src={image.imageUrl} alt={image.alt} />
          </Slide>
        ))}
      </ScrollBody>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  overflow: hidden;
  background-color: #000;
  padding: 10px;
`;

const ScrollBody = styled.div`
  display: flex;
  align-items: center;
`;

const Slide = styled.div`
  position: relative;
  flex: 0 0 auto;
  margin-left: 10px;
  height: 200px;

  @media (min-width: 600px) {
    width: 50%;
    height: 250px;
  }
`;

const StyledImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
`;
