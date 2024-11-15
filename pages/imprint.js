import styled, { keyframes } from "styled-components";

export default function Imprint() {
  return (
    <ImprintContainer>
      <HeadlineImprint>Imprint</HeadlineImprint>
      <MainText>
        <Subheadline>Phillip Oehlenberg</Subheadline>
        <Text>
          Warnholtzstraße 5 <br />
          22767 Hamburg <br />
          Germany
        </Text>
        <Subheadline>Contact</Subheadline>
        <Text>
          Phone: +49 176 619 26 702 <br />
          Email:{" "}
          <EmailLink href="mailto:hi@phillip-oehlenberg.com">
            hi@phillip-oehlenberg.com
          </EmailLink>{" "}
        </Text>
        <DisclaimerHeadline>
          Disclaimer: Liability for content
        </DisclaimerHeadline>{" "}
        <Text>
          The content of my website has been created with the greatest possible
          care. However, I cannot assume any liability for the accuracy,
          completeness and up-to-dateness of the content. I am responsible for
          our own content on these pages in accordance with § 7 (1) TMG (German
          Telemedia Act) and general laws. According to §§ 8 to 10 TMG, however,
          I am not obliged to monitor transmitted or stored third-party
          information or to investigate circumstances that indicate illegal
          activity. Obligations to remove or block the use of information in
          accordance with general legislation remain unaffected by this.
          However, liability in this respect is only possible from the time of
          knowledge of a specific infringement. As soon as I become aware of
          such infringements, I will remove this content immediately.
        </Text>
      </MainText>
    </ImprintContainer>
  );
}

const headlineAnimation = keyframes`
0% { left: -20vw; opacity: 0; letter-spacing: 0.5rem;}
100% { left: 0; opacity: 1; letter-spacing: 0;}
`;

const contentAnimation = keyframes`
0% { top: 10vw; opacity: 0; }
100% { top: 0; opacity: 1; }
`;

const ImprintContainer = styled.section`
  position: relative;
  width: 92vw;
  max-width: 1104px;
  animation-name: ${contentAnimation};
  animation-duration: 0.5s;
  margin: 0 auto;
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 4vw;
`;

const HeadlineImprint = styled.h1`
  position: relative;
  animation-name: ${headlineAnimation};
  animation-duration: 0.5s;
  font-size: 1.8rem;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const DisclaimerHeadline = styled.h2`
  padding-top: 2rem;
  font-size: 1.2rem;
  padding-bottom: 0.2em;
`;

const Subheadline = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 0.2em;
`;

const Text = styled.p`
  padding-bottom: 1rem;
`;

const MainText = styled.section`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const EmailLink = styled.a`
  color: #000;
`;
