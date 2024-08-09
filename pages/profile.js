import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { iconSets } from "@/lib/resume-data";
import Image from "next/image";
import Link from "next/link";
import IconContainer from "@/components/IconContainer";
import SoftSkills from "@/components/SoftSkills";

export default function Profile({ onPageChange }) {
  useEffect(() => {
    onPageChange("profile");
  });

  const interestsAppsIcons = iconSets.filter(
    (iconSet) => iconSet.title === "Interests"
  )[0];

  return (
    <ProfileContainer>
      <IconWrapper>
        <Image src="/Icon_Profile.svg" fill alt="icon_profile" />
      </IconWrapper>
      <HeadlineProfile>THAT&apos;S ME</HeadlineProfile>
      <ImageWrapper>
        <Image src="/profile.jpg" fill alt="profile_picture" priority />
      </ImageWrapper>
      <FillerProfile />
      <TextProfile>
        I&apos;m a freshly trained Frontend Web Developer and seasoned graphic
        designer based in Hamburg, with over a dozen years of professional
        experience in the design field. My journey began in the academic hubs of
        Cologne and the creative whirlwind of London, where I honed my design
        skills.
        <br />
        <br />
        Currently, I&apos;m expanding my expertise by diving deep into Frontend
        Web Development. This blend of web development and graphic design allows
        me to craft visually stunning and user-friendly digital experiences.
        This combination makes me a strong for roles in frontend development,
        where both design aesthetics and technical precision are crucial.
        <br />
        <br />
        Whether it&apos;s coding a responsive website or creating eye-catching
        graphics, I bring a keen eye for detail and a passion for bringing ideas
        to life.
        <br />
        <br />
        In my work, I&apos;m reliable, detail-oriented, and dedicated to
        delivering quality results. Because great web development isn&apos;t
        just about clean code—it&apos;s about creating seamless, user-friendly
        experiences.
        <br />
        <br />
        Excited to collaborate? Drop me a message, and let&apos;s create some
        digital magic together.
      </TextProfile>

      <StripedFillerContainer>
        <StripedFiller />
      </StripedFillerContainer>

      <Icons>
        <IconContainer iconSet={interestsAppsIcons} />
      </Icons>

      <SoftSkillsContainer>
        <SoftSkills />
      </SoftSkillsContainer>

      <StyledLink href="/cv">Go to CV &gt;&gt;&gt;</StyledLink>
    </ProfileContainer>
  );
}

const breatheAnimation = keyframes`
0% {letter-spacing: 0;}
50% {letter-spacing: 0.03rem;}
100% {letter-spacing: 0;}
`;

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

const ProfileContainer = styled.main`
  position: relative;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
  margin: 0 auto;
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: grid;
  grid-template-columns: minmax(min(65vw, 300px), 1fr) 1fr;
  grid-template-rows: minmax(min(30vw, 160px), 1fr) auto auto auto auto auto auto auto;
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

const ImageWrapper = styled.div`
  position: relative;
  width: 65vw;
  max-width: 300px;
  aspect-ratio: 6 / 6.35;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  background-color: #fff;
  justify-content: center;
  object-fit: contain;
`;

const FillerProfile = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  background: repeating-linear-gradient(
    -45deg,
    #000 0px,
    #000 15px,
    #fff 15px,
    #fff 30px
  );
`;

const TextProfile = styled.p`
  font-size: 1rem;
  justify-self: center;
  line-height: 1.6;
  color: #fff;
  width: 92vw;
  padding: 16px;
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  background-color: #000;
  border-radius: 0 0 8px 8px;
`;

const StripedFillerContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 5 / 6;
  padding-top: 40px;
`;

const StripedFiller = styled.div`
  height: 40px;
  background: repeating-linear-gradient(
    -45deg,
    #000 0px,
    #000 15px,
    #fff 15px,
    #fff 30px
  );
`;

const SoftSkillsContainer = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  width: 92vw;
  grid-column: 1 / 3;
  grid-row: 6 / 7;
`;

const Icons = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  width: 92vw;
  grid-column: 1 / 3;
  grid-row: 7 / 8;
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
  grid-row: 8 / 9;
`;
