import Image from "next/image";
import styled from "styled-components";

export default function IconsField({ iconSet }) {
  console.log(iconSet);
  return (
    <IconsFieldWrapper>
      <IconsFieldHeadline>{iconSet.title}</IconsFieldHeadline>

      <MainContainer>
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
    </IconsFieldWrapper>
  );
}

const IconsFieldWrapper = styled.section`
  width: 100%;

  @media screen and (min-width: 800px) {
    width: calc(50% - 20px);
  }
`;

const IconsFieldHeadline = styled.h2`
  color: #fff;
  background-color: #000;
  box-shadow: 8px 8px #000;
  padding: 10px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 1.25rem;
  font-weight: 500;
`;

const MainContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  border: 3px solid #000;
  box-shadow: 8px 8px #000;
  border-radius: 0 0 8px 8px;
  background-color: #fff;
  flex-wrap: wrap;
  gap: 20px;
  padding: 12px;
  padding-bottom: 20px;
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

const IconSubline = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  padding-top: 0.5rem;
`;
