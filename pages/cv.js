import { workExperiences, education, school } from "@/lib/resume";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

export default function CV() {
  return (
    <CvContainer>
      <IconWrapper>
        <Image src="/Icon_CV.svg" fill alt="icon_profile" />
      </IconWrapper>
      <HeadlineProfile>CV</HeadlineProfile>

      <ResumeContainer>
        <CategoryContainer>
          <CategoryTitle>{workExperiences.title}</CategoryTitle>
          {workExperiences.entries.map((entry) => {
            return (
              <EntryCard key={entry.place}>
                <EntryDate>{entry.date}</EntryDate>
                <EntryPlace>{entry.place}</EntryPlace>
                <EntryType>{entry.type}</EntryType>
                {entry.description && (
                  <EntryDescription>{entry.description}</EntryDescription>
                )}
                {entry.clients && (
                  <EntryClients>
                    <strong>Clients: </strong>
                    {entry.clients}
                  </EntryClients>
                )}
                {entry.degree && (
                  <EntryDegree>
                    <strong>Degree: </strong>
                    {entry.degree}
                  </EntryDegree>
                )}
              </EntryCard>
            );
          })}
        </CategoryContainer>

        <CategoryContainer>
          <CategoryTitle>{education.title}</CategoryTitle>
          {education.entries.map((entry) => {
            return (
              <EntryCard key={entry.place}>
                <EntryDate>{entry.date}</EntryDate>
                <EntryPlace>{entry.place}</EntryPlace>
                <EntryType>{entry.type}</EntryType>
                {entry.description && (
                  <EntryDescription>{entry.description}</EntryDescription>
                )}
                {entry.clients && (
                  <EntryClients>
                    <strong>Clients: </strong>
                    {entry.clients}
                  </EntryClients>
                )}
                {entry.degree && (
                  <EntryDegree>
                    <strong>Degree: </strong>
                    {entry.degree}
                  </EntryDegree>
                )}
              </EntryCard>
            );
          })}
        </CategoryContainer>

        <CategoryContainer>
          <CategoryTitle>{school.title}</CategoryTitle>
          {school.entries.map((entry) => {
            return (
              <EntryCard key={entry.place}>
                <EntryDate>{entry.date}</EntryDate>
                <EntryPlace>{entry.place}</EntryPlace>
                <EntryType>{entry.type}</EntryType>
                {entry.description && (
                  <EntryDescription>{entry.description}</EntryDescription>
                )}
                {entry.clients && (
                  <EntryClients>
                    <strong>Clients: </strong>
                    {entry.clients}
                  </EntryClients>
                )}
                {entry.degree && (
                  <EntryDegree>
                    <strong>Degree: </strong>
                    {entry.degree}
                  </EntryDegree>
                )}
              </EntryCard>
            );
          })}
        </CategoryContainer>
      </ResumeContainer>
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

const CvContainer = styled.main`
  position: relative;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
  margin: 0 auto;
  margin-top: 7rem;
  margin-bottom: 7rem;
  padding-left: 4vw;
  padding-right: 4vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(min(30vw, 160px), 1fr) auto auto auto auto;
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
  padding-bottom: 1.2em;
  padding-left: 4vw;
  padding-right: 4vw;
  text-align: center;
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const ResumeContainer = styled.div`
  justify-self: center;
  grid-column: 1 / 3;
  grid-row: 3/4;

  /* column-count: 2;
  column-gap: 30px; */
`;

const CategoryContainer = styled.div`
  padding-bottom: 50px;
`;

const EntryCard = styled.div`
  box-shadow: 8px 8px #000;
  background-color: #fff;
  border: 3px solid #000;
  margin-top: 30px;
  border-radius: 0 0 8px 8px;
`;

const EntryDate = styled.h5`
  background-color: #000;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 450;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
  border-bottom: 2px solid #000;
`;

const EntryPlace = styled.h3`
  font-size: 1.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

const EntryType = styled.h4`
  font-size: 1.2rem;
  font-weight: 450;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  border-top: 2px solid #000;
`;

const EntryDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 10px;
  border-top: 2px solid #000;
`;

const CategoryTitle = styled.h2`
  color: #fff;
  background-color: #000;
  padding: 10px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 1.6rem;
`;

const EntryClients = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 10px;
  border-top: 2px dotted #000;
`;

const EntryDegree = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 10px;
  border-top: 2px solid #000;
`;
