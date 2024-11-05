import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import PortfolioCarousel from "@/components/PortfolioCarousel";

export default function GraphicPortfolio({
  handleshowLargeImage,
  illustrationImagesData,
  webDesignImagesData,
  printImagesData,
  logoImagesData,
  packegingImagesData,
}) {
  return (
    <PortfolioContainer>
      <IconWrapper>
        <Image
          src="/Icons/Icon_Portfolio_Graphic_Design.svg"
          fill
          alt="icon_profile"
        />
      </IconWrapper>
      <HeadlineProfile>GRAPHIC DESIGN</HeadlineProfile>

      <GraphicPortfolioContainer>
        <PortfolioCarousel
          images={webDesignImagesData}
          title="Web Design"
          onShowLargeImage={handleshowLargeImage}
        />
        <Filler />
        <PortfolioCarousel
          images={printImagesData}
          title="Print Design"
          onShowLargeImage={handleshowLargeImage}
        />
        <Filler />
        <PortfolioCarousel
          images={illustrationImagesData}
          title="Illstrations"
          onShowLargeImage={handleshowLargeImage}
        />
        <Filler />
        <PortfolioCarousel
          images={logoImagesData}
          title="Logos"
          onShowLargeImage={handleshowLargeImage}
        />
        <Filler />
        <PortfolioCarousel
          images={packegingImagesData}
          title="Packaging"
          onShowLargeImage={handleshowLargeImage}
        />
      </GraphicPortfolioContainer>

      <GraphicPortfolioLinkContainer>
        <GraphicPortfolioIntro>
          To see my full graphic design portfolio click the link below.
        </GraphicPortfolioIntro>
        <StyledGraphicPortfolioLink
          href="https://phillip-oehlenberg.com/"
          target="_blank"
        >
          Full Graphic Design Portfolio
        </StyledGraphicPortfolioLink>
      </GraphicPortfolioLinkContainer>

      <StyledLink href="/contact">Contact &gt;&gt;&gt;</StyledLink>
    </PortfolioContainer>
  );
}

const iconAnimation = keyframes`
0% { top: -20vw; opacity: 0;}
100% { top: 0; opacity: 1;}
`;

const headlineAnimation = keyframes`
0% { left: -20vw; opacity: 0; letter-spacing: 0.5rem;}
100% { left: 0; opacity: 1; letter-spacing: 0;}
`;

const contentAnimation = keyframes`
0% { top: 10vw; opacity: 0; }
100% { top: 0; opacity: 1; }
`;

const breatheAnimation = keyframes`
0% {letter-spacing: 0;}
50% {letter-spacing: 0.03rem;}
100% {letter-spacing: 0;}
`;

const PortfolioContainer = styled.section`
  position: relative;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
  margin: 0 auto;
  width: 92vw;
  max-width: 1104px;
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(min(30vw, 160px), 1fr) auto auto auto;
  gap: 4vw;
`;

const IconWrapper = styled.div`
  position: relative;
  animation-name: ${iconAnimation};
  animation-duration: 0.5s;
  height: 30vw;
  width: 30vw;
  max-height: 160px;
  justify-self: center;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;

const HeadlineProfile = styled.h1`
  position: relative;
  animation-name: ${headlineAnimation};
  animation-duration: 0.5s;
  font-size: min(10vw, 2.5rem);
  padding-bottom: 0.8em;
  padding-left: 4vw;
  padding-right: 4vw;
  text-align: center;
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const GraphicPortfolioContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
`;

const Filler = styled.div`
  height: 60px;
  background-color: #fff;
`;

const StyledLink = styled(Link)`
  text-align: center;
  font-size: min(4.5vw, 1.5rem);
  font-weight: 500;
  text-decoration: none;
  color: #000;
  padding-top: 2rem;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  grid-column: 1 / 3;
  grid-row: 5 / 6;
`;

const GraphicPortfolioLinkContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-column: 1 / 3;
  grid-row: 4 / 5;
`;

const GraphicPortfolioIntro = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  padding-bottom: 20px;
`;

const StyledGraphicPortfolioLink = styled(Link)`
  color: #000;
  font-size: 1.1rem;
  font-weight: 500;
  width: 50%;
  text-decoration: none;
  text-align: center;
  border: 3px solid #000;
  border-radius: 8px;
  padding: 10px;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
