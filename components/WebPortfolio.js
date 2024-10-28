import styled from "styled-components";
import Image from "next/image";

export default function WebPortfolio({ data }) {
  return (
    <>
      <PortfolioContainer>
        <PortfolioTitle>{data.title}</PortfolioTitle>
        {data.projects.map((project) => {
          return (
            <PortfolioCard key={project.name}>
              <ProjectName>{project.name}</ProjectName>
              {project.thumbnail !== "" && (
                <ImageContainer>
                  <StyledImage
                    src={project.thumbnail}
                    fill
                    alt={project.thumbnail}
                  />
                </ImageContainer>
              )}
              <ProjectTechStack>
                {project.techStack.map((projectTech) => {
                  return (
                    <ProjectTech key={projectTech}>{projectTech}</ProjectTech>
                  );
                })}
              </ProjectTechStack>
              <ProjectRole>
                <strong>Role: </strong>
                {project.role}
              </ProjectRole>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLinkWebsite
                  href={project.link}
                  alt={`Link to ${project.name}`}
                  target="blank"
                >
                  <Image
                    src="/Icon_Globe.svg"
                    height="18"
                    width="18"
                    alt="Icon GitHub"
                  />
                  <LinkText>Go to Website</LinkText>
                </ProjectLinkWebsite>

                <ProjectLinkGitHub
                  href={project.repository}
                  alt={`Link to GitHub repository of ${project.name}`}
                  target="blank"
                >
                  <Image
                    src="/Icon_GitHub.svg"
                    height="18"
                    width="18"
                    alt="Icon GitHub"
                  />
                  <LinkText>GitHub Repo</LinkText>
                </ProjectLinkGitHub>
              </ProjectLinks>
            </PortfolioCard>
          );
        })}
      </PortfolioContainer>
    </>
  );
}

const PortfolioContainer = styled.section`
  padding-bottom: 80px;

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
  font-size: 1.6rem;
  text-align: center;
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

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
`;

const StyledImage = styled(Image)`
  padding: 20px;
  object-fit: contain;
`;

const ProjectTechStack = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 12px;
  display: flex;
  justify-content: flex-start;
  gap: 6px 6px;
`;

const ProjectTech = styled.h4`
  display: inline;
  color: #fff;
  background-color: #000;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 8px;
`;

const ProjectRole = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 10px;
`;

const ProjectLinks = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

const ProjectLinkWebsite = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  gap: 6px;
  color: #fff;
  background-color: #000;
  text-decoration: none;
  font-weight: 500;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 2px solid #000;
  border-radius: 8px;
`;

const ProjectLinkGitHub = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  gap: 6px;
  color: #000;
  background-color: #fff;
  text-decoration: none;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 2px solid #000;
  border-radius: 8px;
`;

const LinkText = styled.h5`
  display: inline;
  font-size: 0.9rem;
  font-weight: 500;
`;
