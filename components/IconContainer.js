import Image from "next/image";
import styled from "styled-components";

export default function IconContainer({ iconSet }) {
  return (
    <MainContainer>
      <IconContainerHeadline>{iconSet.title}</IconContainerHeadline>

      {iconSet.icons.map((icon) => {
        return (
          <IconCard key={icon.name}>
            <ImageWrapper>
              <Image src={icon.iconURL} fill alt={icon.alt} />
            </ImageWrapper>
            <IconSubline>{icon.name}</IconSubline>
          </IconCard>
        );
      })}
    </MainContainer>
  );
}

const IconContainerHeadline = styled.h2`
  width: 100%;
  color: #fff;
  background-color: #000;
  padding: 10px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 1.4rem;
  font-weight: 500;
`;

const MainContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  border: 3px solid #000;
  box-shadow: 8px 8px #000;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 20px;
  margin-bottom: 40px;
`;

const IconCard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

const IconSubline = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  padding-top: 0.5rem;
`;
