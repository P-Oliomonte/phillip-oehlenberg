import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main>
      <ProfileContainer>
        <IconWrapper>
          <Image src="/Icon_Profile.svg" fill alt="icon_profile" />
        </IconWrapper>
        <HeadlineProfile>That&apos;s Me</HeadlineProfile>
        <ImageWrapper>
          <Image src="/profile.jpg" fill alt="profile_picture" />
        </ImageWrapper>
        <FillerProfile />
        <TextProfile>
          I&apos;m a seasoned graphic designer calling Hamburg my home. I have
          over a dozen years of professional experience in the design field.
          Before that, I&apos;ve crafted my skills in the academic hubs of
          Cologne and the creative whirlwind of London.
          <br />
          <br />
          I&apos;m currently delving into the world of web development to expand
          my creative toolkit and add some extra sprinkles to my portfolio.
          <br />
          <br />
          My design spectrum? It&apos;s as varied as the cityscape at
          sunset—ranging from sleek and professional to whimsically playful.
          Whether it&apos;s pixels or paper, I&apos;ve got you covered with a
          keen eye for detail and a knack for bringing ideas to life.
          <br />
          <br />
          When it comes to work, I&apos;m reliable, conscientious, and always up
          for a chat. Because let&apos;s be real, good design is not just about
          visuals—it&apos;s about building connections.
          <br />
          <br />
          Excited to collaborate? Drop me a message, and let&apos;s make some
          design magic together.
        </TextProfile>
        <StyledLink href="/cv">Go to CV &gt;&gt;&gt;</StyledLink>
      </ProfileContainer>
    </main>
  );
}

const breatheAnimation = keyframes`
0% {letter-spacing: 0;}
50% {letter-spacing: 0.03rem;}
100% {letter-spacing: 0;}
`;

const iconAnimation = keyframes`
0% { top: -10vw; opacity: 0; transform: rotate(0turn);}
100% { top: 0; opacity: 1; transform: rotate(1turn);}
`;

const headlineAnimation = keyframes`
0% { left: 20vw; opacity: 0; letter-spacing: 0.5rem;}
100% { left: 0; opacity: 1; letter-spacing: 0;}
`;

const contentAnimation = keyframes`
0% { top: 10vw; opacity: 0; letter-spacing: 0.5rem;}
100% { top: 0; opacity: 1; letter-spacing: 0;}
`;

const ProfileContainer = styled.section`
  position: relative;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
  margin: 0 auto;
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: grid;
  grid-template-columns: minmax(min(65vw, 300px), 1fr) 1fr;
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
    45deg,
    #000 0px,
    #000 15px,
    #fff 15px,
    #fff 30px
  );
`;

const TextProfile = styled.p`
  font-size: 0.9rem;
  justify-self: center;
  line-height: 1.4;
  color: #fff;
  width: 90%;
  padding: 30px;
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  background-color: #000;
  border-radius: 8px;
`;

const StyledLink = styled(Link)`
  text-align: center;
  position: relative;
  top: 2.5rem;
  font-size: min(4.5vw, 1.5rem);
  font-weight: 500;
  text-decoration: none;
  color: #000;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  grid-column: 1 / 3;
  grid-row: 5 / 6;
`;
