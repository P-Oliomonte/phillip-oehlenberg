import {
  workExperiences,
  education,
  school,
  iconSets,
} from "@/lib/resume-data";
import ResumeCategory from "@/components/ResumeCategory";
import IconsField from "@/components/IconsField";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function CV({ onPageChange }) {
  const languageIcons = iconSets.filter(
    (iconSet) => iconSet.title === "Languages"
  )[0];

  const techStackIcons = iconSets.filter(
    (iconSet) => iconSet.title === "Tech Stack"
  )[0];

  const graphicsAppsIcons = iconSets.filter(
    (iconSet) => iconSet.title === "Tools"
  )[0];

  return (
    <CvContainer>
      <IconWrapper>
        <Image src="/Icons/Icon_CV.svg" fill alt="icon_profile" />
      </IconWrapper>
      <HeadlineCV>CV</HeadlineCV>

      <IconsContainer>
        <IconsField iconSet={techStackIcons} />
        <IconsField iconSet={graphicsAppsIcons} />
        <IconsField iconSet={languageIcons} />
      </IconsContainer>

      <StripedFiller />

      <ResumeContainer>
        <WorkExperienceContainer>
          <ResumeCategory data={workExperiences} />
        </WorkExperienceContainer>
        <EducationAndSchoolContainer>
          <ResumeCategory data={education} />
          <ResumeCategory data={school} />
        </EducationAndSchoolContainer>
      </ResumeContainer>
      <StyledLink href="/web-portfolio">
        Go to Portfolio &gt;&gt;&gt;
      </StyledLink>
    </CvContainer>
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

const CvContainer = styled.section`
  position: relative;
  width: 92vw;
  max-width: 1104px;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
  margin: 0 auto;
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(min(30vw, 160px), 1fr) auto auto auto auto auto;
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

const HeadlineCV = styled.h1`
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

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  padding-bottom: 40px;
  margin: 0 auto;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
`;

const StripedFiller = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  height: 40px;
  background: repeating-linear-gradient(
    -45deg,
    #000 0px,
    #000 15px,
    #fff 15px,
    #fff 30px
  );
`;

const ResumeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-column: 1 / 3;
  grid-row: 5 / 6;
  padding-top: 40px;
`;

const WorkExperienceContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;

  @media screen and (min-width: 800px) {
    width: calc(50% - 20px);
    padding-bottom: 0;
  }
`;

const EducationAndSchoolContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 800px) {
    width: calc(50% - 20px);
  }
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
  grid-row: 6 / 7;
`;
