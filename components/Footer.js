import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLogoAndCopyrightWrapper>
        <Image src="/Logo_Inverted.svg" width={200} height={49} alt="logo" />
        <StyledCopyrigth>© 2024</StyledCopyrigth>{" "}
      </StyledLogoAndCopyrightWrapper>
      <div>
        <StyledLink href="/imprint">Imprint</StyledLink>
        <StyledLink href="/privacy-policy">Privacy Policy</StyledLink>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  color: #fff;
  background-color: #000;
  padding: 20px;
  padding-left: 4vw;
  padding-right: 4vw;
`;

const StyledLink = styled(Link)`
  color: #fff;
  display: block;
  padding-bottom: 0.5rem;
`;

const StyledLogoAndCopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex-wrap: wrap;
  gap: 30px;
`;

const StyledCopyrigth = styled.p`
  font-size: 0.9rem;
`;
