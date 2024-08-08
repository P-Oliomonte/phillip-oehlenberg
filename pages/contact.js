import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

export default function Contact({ onPageChange }) {
  useEffect(() => {
    onPageChange("contact");
  });

  return (
    <ContactContainer>
      <IconWrapper>
        <Image src="/Icon_Contact.svg" fill alt="icon_profile" />
      </IconWrapper>
      <HeadlineProfile>Contact</HeadlineProfile>
      <ContactIntro>
        If you are interested in working with me please feel free to contact me.
        I&apos;m looking forward to getting to know you.
      </ContactIntro>

      <ContactDetailsContainer>
        <ContactDetails>
          <IconNameContainer>
            <Image
              src="Icon_Name.svg"
              width={30}
              height={30}
              alt="Icon profile"
            />
          </IconNameContainer>
          <Name>Phillip Oehlenberg</Name>

          <IconAddressContainer>
            <Image
              src="Icon_Address.svg"
              width={30}
              height={30}
              alt="Icon address"
            />
          </IconAddressContainer>
          <Address>
            Warnholtzstraße 5 <br /> 22767 Hamburg
          </Address>

          <IconPhoneContainer>
            <Image
              src="Icon_Phone.svg"
              width={30}
              height={30}
              alt="Icon_Phone.svg"
            />
          </IconPhoneContainer>
          <Phone>+49-(0)176-619 26 702</Phone>
        </ContactDetails>
      </ContactDetailsContainer>

      <Mail href="mailto:hi@phillip-oehlenberg.com">
        <Image src="Icon_Mail.svg" width={50} height={50} alt="Icon_Mail.svg" />
        <ButtonText>SEND E-MAIL</ButtonText>
      </Mail>
    </ContactContainer>
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

const ContactContainer = styled.main`
  position: relative;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 92vw;
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: grid;
  grid-template-rows: auto auto auto auto auto;
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
  padding-bottom: 0.8em;
  padding-left: 4vw;
  padding-right: 4vw;
  text-align: center;
  grid-row: 2 / 3;
`;

const ContactIntro = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  padding-bottom: 20px;
  max-width: 400px;
  grid-row: 3 / 4;
`;

const ContactDetailsContainer = styled.div`
  grid-row: 4 / 5;
  padding-bottom: 40px;
`;

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto auto;
  margin: 0 auto;
  width: 92vw;
  max-width: 350px;
  border: 2px solid #000;
  border-radius: 0 0 8px 8px;
  box-shadow: 8px 8px #000;
`;

const IconNameContainer = styled.div`
  align-self: center;
  padding: 12px;
  padding-bottom: 0;
  padding-right: 20px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const IconAddressContainer = styled.div`
  align-self: center;
  padding: 12px;
  padding-bottom: 0;
  padding-right: 20px;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const IconPhoneContainer = styled.div`
  align-self: center;
  padding: 12px;
  padding-bottom: 12px;
  padding-right: 20px;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`;

const Name = styled.p`
  align-self: center;
  padding-top: 6px;
  font-weight: 500;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

const Address = styled.p`
  align-self: center;
  padding-top: 6px;
  font-weight: 500;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const Phone = styled.p`
  align-self: center;
  font-weight: 500;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

const Mail = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px;
  padding-left: 10px;
  padding-right: 18px;
  text-decoration: none;
  border-radius: 8px;
  color: #fff;
  background-color: #000;
  font-size: 1.1rem;
  font-weight: 500;
  grid-column: 1 / 2;
  grid-row: 5 / 6;
`;

const ButtonText = styled.p``;
