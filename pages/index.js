import styled from "styled-components";
import Image from "next/image";

export default function Home() {
  return (
    <HeaderContainer>
      <ImageWrapper>
        <Image
          src="/logo_icon_ani_complete_small.webp"
          alt="header-animation"
          fill
        />
      </ImageWrapper>
      <Headline>
        HEY THERE, <HeadlineHighlight>I&apos;M PHILLIP.</HeadlineHighlight> NICE
        TO MEET YOU!
      </Headline>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 92vw;
  margin-top: 7rem;
  margin-bottom: 6rem;
  position: static;
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 1.2rem;
  align-items: center;
  justify-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 92vw;
  height: 92vw;
  max-width: 420px;
  max-height: 420px;
  grid-row: 1 / 2;
`;

const Headline = styled.h1`
  width: 80%;
  font-size: 12vw;
  font-weight: 800;
  text-align: center;
  color: #000;
  padding-top: 0.2rem;
  grid-row: 2 / 3;
`;

const HeadlineHighlight = styled.span`
  color: #fff;
  -webkit-text-stroke: 2px #000;
`;
