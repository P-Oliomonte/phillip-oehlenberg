import styled, { keyframes } from "styled-components";

export default function PrivacyPolicy() {
  return (
    <PrivacyContainer>
      <HeadlinePrivacy>Privacy Policy</HeadlinePrivacy>
      <MainText>
        <Text>
          Privacy Policy This Privacy Policy outlines the types of personal
          information collected on this website and how it is used. By using
          this website, users agree to the terms of this policy.
        </Text>
        <Subheadline>1. Data Collection</Subheadline>
        <Text>
          Personal information is collected through the following methods: Log
          Files: The website collects log files, which include information such
          as IP address, browser type, referring/exit pages, and timestamps.
          This data is non-personally identifiable and is used to analyze
          trends, administer the site, and gather demographic information.
          Cookies: This website may use cookies to store information about
          visitor preferences and to track user-specific information on visited
          pages. Cookies can be disabled through browser settings.
        </Text>
        <Subheadline>2. Google Analytics</Subheadline>
        <Text>
          This website uses Google Analytics, a web analytics service provided
          by Google LLC, to analyze visitor behavior. Google Analytics collects
          information through cookies, including: IP address Browser type and
          version Device type Pages visited Time spent on each page The
          information collected by Google Analytics is anonymized before storage
          and is solely used to improve user experience and understand visitor
          interests. No commercial or advertising purposes are associated with
          this data. For more information on how Google collects and processes
          data, visit Google&apos;s Privacy & Terms. To prevent data collection
          by Google Analytics, visitors can install the Google Analytics opt-out
          browser add-on, available here.
        </Text>
        <Subheadline>3. Data Usage</Subheadline>
        <Text>
          Collected data is used exclusively for website improvement purposes
          and is not shared with third parties, except as required by law or to
          ensure the security of the website.
        </Text>
        <Subheadline>4. Data Security</Subheadline>
        <Text>
          Reasonable security measures are implemented to protect personal
          information from unauthorized access, alteration, or destruction.
          However, due to the nature of internet transmissions, absolute data
          security cannot be guaranteed.
        </Text>
        <Subheadline>5. User Rights</Subheadline>
        <Text>
          In compliance with applicable data protection laws, users have the
          right to: Access the personal information collected about them Request
          correction of incorrect information Request deletion of personal data,
          as permitted under GDPR regulations To exercise these rights, please
          contact: hi@phillip-oehlenberg.com
        </Text>
        <Subheadline>6. Changes to the Privacy Policy</Subheadline>
        <Text>
          This Privacy Policy may be updated periodically. Any changes will be
          posted on this page. Users are encouraged to review this policy
          periodically for any updates.
        </Text>
      </MainText>
    </PrivacyContainer>
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

const PrivacyContainer = styled.section`
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
  grid-template-rows: auto auto auto auto auto auto auto;
  gap: 4vw;
`;

const HeadlinePrivacy = styled.h1`
  position: relative;
  animation-name: ${headlineAnimation};
  animation-duration: 0.5s;
  font-size: 1.8rem;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const Subheadline = styled.h2`
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
