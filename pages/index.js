import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Home({ onPageChange }) {
  onPageChange("home");

  return (
    <main>
      <HeaderContainer>
        <ImageWrapper>
          <Image
            src="/logo_icon_ani_complete_small.webp"
            alt="header-animation"
            fill
            priority
            unoptimized
          />
        </ImageWrapper>
        <Headline>
          HEY THERE, <HeadlineHighlight>I&apos;M PHILLIP.</HeadlineHighlight>{" "}
          NICE TO MEET YOU!
        </Headline>
        <StyledLink href="/profile">Go to Profile &gt;&gt;&gt;</StyledLink>
      </HeaderContainer>
    </main>
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

const HeaderContainer = styled.div`
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 92vw;
  margin-top: 7rem;
  margin-bottom: 7rem;
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
  position: relative;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
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

const StyledLink = styled(Link)`
  position: relative;
  top: 2.5rem;
  font-size: min(4.5vw, 1.5rem);
  font-weight: 500;
  text-decoration: none;
  color: #000;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
