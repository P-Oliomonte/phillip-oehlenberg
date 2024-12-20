import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { webPortfolios } from "@/lib/portfolio-data";
import WebPortfolioList from "@/components/WebPortfolioList";

export default function WebPortfolio() {
  const webPortfolioApps = webPortfolios.filter(
    (webPortfolio) => webPortfolio.title === "APPS"
  )[0];

  const webPortfolioPractices = webPortfolios.filter(
    (webPortfolio) => webPortfolio.title === "PRACTICES"
  )[0];

  return (
    <PortfolioContainer>
      <IconWrapper>
        <Image
          src="/Icons/Icon_Portfolio_Web_Dev.svg"
          fill
          alt="icon_profile"
        />
      </IconWrapper>
      <HeadlineProfile>WEB DEVELOPMENT</HeadlineProfile>

      <WebPortfolioContainer>
        <WebPortfolioList data={webPortfolioApps} />
        <WebPortfolioList data={webPortfolioPractices} />
      </WebPortfolioContainer>

      <StyledLink href="/graphic-portfolio">
        Graphic Design Portfolio &gt;&gt;&gt;
      </StyledLink>
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
  margin: 0 auto;
  width: 92vw;
  max-width: 1104px;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
  margin: 0 auto;
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

const WebPortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
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
  grid-row: 4 / 5;
`;
