import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Plant() {
  return (
    <PlantContainer>
      <HeadlineProfile>Moin FARN!</HeadlineProfile>
      <StripedContainer>
        <ImageWrapper>
          <StyledImage src="/Pflanze.jpg" fill alt="plant" />
        </ImageWrapper>
      </StripedContainer>
      <TextContainer>
        <StyledText>
          Das ist meine Lieblingspflanze. Ein Drachenbaum, der mich seit über 20
          Jahren begleitet.
        </StyledText>
        <StyledText>
          Wenn Ihr mehr über ihn oder mich erfahren möchtet, würde ich mich
          freuen von Euch zu hören.
        </StyledText>
      </TextContainer>
      <StyledLink href="/contact">Contact &gt;&gt;&gt;</StyledLink>
    </PlantContainer>
  );
}

const breatheAnimation = keyframes`
0% {letter-spacing: 0;}
50% {letter-spacing: 0.03rem;}
100% {letter-spacing: 0;}
`;

const PlantContainer = styled.section`
  position: relative;
  width: 92vw;
  max-width: 1104px;
  margin: 0 auto;
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 30px;
`;

const HeadlineProfile = styled.h1`
  position: relative;
  font-size: min(10vw, 2.5rem);
  padding-left: 4vw;
  padding-right: 4vw;
  text-align: center;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const StripedContainer = styled.div`
  margin: 0 auto;
  padding: 25px;
  background: repeating-linear-gradient(
    -45deg,
    #000 0px,
    #000 15px,
    #fff 15px,
    #fff 30px
  );
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  border: 4px solid #fff;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`;

const StyledText = styled.p`
  width: 92vw;
  max-width: 500px;
  text-align: center;
  padding-bottom: 15px;
  font-size: 1.2rem;
  justify-self: center;
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
  grid-column: 1 / 2;
  grid-row: 4 / 5;
`;
