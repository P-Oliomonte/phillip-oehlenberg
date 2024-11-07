import { softskills } from "@/lib/resume-data";
import styled from "styled-components";

export default function SoftSkills() {
  return (
    <SoftSkillsWrapper>
      <IconContainerHeadline>I am</IconContainerHeadline>

      <SoftSkillsCard>
        <StyledList>
          {softskills.map((softskill) => {
            return <li key={softskill}>{softskill}</li>;
          })}
        </StyledList>
      </SoftSkillsCard>
    </SoftSkillsWrapper>
  );
}

const SoftSkillsWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 800px) {
    width: calc(50% - 20px);
  }
`;

const IconContainerHeadline = styled.h2`
  width: 100%;
  color: #fff;
  background-color: #000;
  box-shadow: 8px 8px #000;
  padding: 10px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 1.25rem;
  font-weight: 500;
`;

const SoftSkillsCard = styled.div`
  box-shadow: 8px 8px #000;
  background-color: #fff;
  border: 3px solid #000;
  border-radius: 0 0 8px 8px;
`;

const StyledList = styled.ul`
  list-style: inside url("/List_Arrow.svg");
  padding: 12px;
  column-count: 2;
  line-height: 1.6;
  font-size: 1.1rem;
`;
