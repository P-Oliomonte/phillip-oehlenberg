import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

export default function Contact({ onPageChange }) {
  useEffect(() => {
    onPageChange("contact");
  });

  return (
    <HomeContainer>
      <IconWrapper>
        <Image src="/Icon_Contact.svg" fill alt="icon_profile" />
      </IconWrapper>
      <HeadlineProfile>Contact</HeadlineProfile>
    </HomeContainer>
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

const HomeContainer = styled.div`
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 92vw;
  margin-top: 7rem;
  margin-bottom: 7rem;
  position: static;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 1.2rem;
  align-items: center;
  justify-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  animation-name: ${iconAnimation};
  animation-duration: 0.5s;
  height: 30vw;
  width: 30vw;
  max-height: 160px;
  justify-self: center;
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
  grid-row: 2 / 3;
`;
