import styled from "styled-components";
import Image from "next/image";

export default function Plant() {
  return (
    <PlantContainer>
      <HeadlineProfile>Moin FARN!</HeadlineProfile>
      <StripedContainer>
        <ImageWrapper>
          <StyledImage src="/Pflanze.jpg" fill alt="plant" />
        </ImageWrapper>
      </StripedContainer>
      <StyledText>
        Das ist meine Lieblingspflanze. Ein Drachenbaum, der mich seit über 20
        Jahren begleitet.{" "}
      </StyledText>
    </PlantContainer>
  );
}

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
  gap: 4vw;
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
  display: flex;
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

const StyledText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`;
