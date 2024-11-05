import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home({ onPageChange }) {
  const [imageSrc, setImageSrc] = useState(
    "/logo_icon_ani_complete_small.webp"
  );

  useEffect(() => {
    const timestamp = new Date().getTime();
    setImageSrc(`/logo_icon_ani_complete_small.webp?t=${timestamp}`);
  }, []);

  return (
    <HomeContainer>
      <ImageWrapper>
        <Image
          src={imageSrc}
          alt="header-animation"
          fill
          priority
          unoptimized
        />
      </ImageWrapper>
      <Headline>
        HEY THERE, <HeadlineHighlight>I&apos;M PHILLIP.</HeadlineHighlight> NICE
        TO MEET YOU!
      </Headline>
      <StyledLink href="/profile">Go to Profile &gt;&gt;&gt;</StyledLink>
    </HomeContainer>
  );
}

const breatheAnimation = keyframes`
0% {letter-spacing: 0;}
50% {letter-spacing: 0.03rem;}
100% {letter-spacing: 0;}
`;

const contentAnimation = keyframes`
0% { top: 10vw; opacity: 0; }
100% { top: 0; opacity: 1; }
`;

const HomeContainer = styled.section`
  margin: 0 auto;
  width: 92vw;
  max-width: 1104px;
  margin-top: 7rem;
  margin-bottom: 7rem;
  position: static;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-template-rows: auto auto auto;
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
  grid-column: 1 / 3;
  grid-row: 1 / 2;

  @media screen and (min-width: 1200px) {
    grid-column: 1 / 2;
  }
`;

const Headline = styled.h1`
  position: relative;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
  width: 80%;
  font-size: 12vw;
  font-weight: 800;
  text-align: center;
  color: #000;
  padding-top: 0.2rem;
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  @media screen and (min-width: 600px) {
    font-size: 72px;
  }

  @media screen and (min-width: 1200px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

const HeadlineHighlight = styled.span`
  color: #fff;
  -webkit-text-stroke: 2px #000;
`;

const StyledLink = styled(Link)`
  padding-top: 2rem;
  font-size: min(4.5vw, 1.5rem);
  font-weight: 500;
  text-decoration: none;
  color: #000;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  grid-column: 1 / 3;
  grid-row: 3 / 4;

  @media screen and (min-width: 1200px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;
