import styled from "styled-components";
import Link from "next/link";

export default function WebPortfolio({ data }) {
  return (
    <>
      <PortfolioContainer>
        <PortfolioTitle>{data.title}</PortfolioTitle>
        {data.projects.map((project) => {
          return (
            <PortfolioCard key={project.name}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectRole>
                <strong>Role: </strong>
                {project.role}
              </ProjectRole>
              <ProjectTechStack>
                {project.techStack.map((projectTech) => {
                  return (
                    <ProjectTech key={projectTech}>{projectTech}</ProjectTech>
                  );
                })}
              </ProjectTechStack>

              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLink>Website</ProjectLink>

                <ProjectLink>GitHub Repo</ProjectLink>
              </ProjectLinks>
            </PortfolioCard>
          );
        })}
      </PortfolioContainer>
    </>
  );
}

const PortfolioContainer = styled.section`
  padding-bottom: 50px;

  &:nth-last-of-type(1) {
    padding-bottom: 0;
  }
`;

const PortfolioTitle = styled.h2`
  color: #fff;
  background-color: #000;
  padding: 10px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 1.5rem;
  font-weight: 500;
`;

const PortfolioCard = styled.div`
  box-shadow: 8px 8px #000;
  background-color: #fff;
  border: 3px solid #000;
  margin-top: 25px;
  border-radius: 0 0 8px 8px;
`;

const ProjectName = styled.h3`
  color: #fff;
  background-color: #000;
  font-size: 1.4rem;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

const ProjectTechStack = styled.div`
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

const ProjectTech = styled.h4`
  display: inline;
  color: #fff;
  background-color: #000;
  font-size: 0.8rem;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 8px;
`;

const ProjectRole = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 10px;
  border-top: 2px dotted #000;
`;

const ProjectLinks = styled.div`
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

const ProjectLink = styled(Link)`
  color: #fff;
  background-color: #000;
`;
