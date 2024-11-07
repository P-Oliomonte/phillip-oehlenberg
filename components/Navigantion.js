import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();

  const [showPortfolioSubmenu, setShowPortfolioSubmenu] = useState(false);

  return (
    <StyledNavigation>
      <StyledLink href="/" $isActive={router.pathname === "/"}>
        HOME
      </StyledLink>

      <StyledLink href="/profile" $isActive={router.pathname === "/profile"}>
        PROFILE
      </StyledLink>

      <StyledLink href="/cv" $isActive={router.pathname === "/cv"}>
        CV
      </StyledLink>

      <StyledPortfoliosContainer
        onMouseEnter={() => setShowPortfolioSubmenu(true)}
        onMouseLeave={() => setShowPortfolioSubmenu(false)}
      >
        <StyledNavButton
          onClick={() => setShowPortfolioSubmenu(!showPortfolioSubmenu)}
          $isActive={
            router.pathname === "/web-portfolio" ||
            router.pathname === "/graphic-portfolio"
          }
        >
          PORTFOLIOS
        </StyledNavButton>

        {showPortfolioSubmenu && (
          <PortfolioSubmenuContainer>
            <StyledSubMenuLink
              href="/web-portfolio"
              $isActive={router.pathname === "/web-portfolio"}
              onClick={() => setShowPortfolioSubmenu(false)}
            >
              WEB DEV
            </StyledSubMenuLink>
            <StyledSubMenuLink
              href="/graphic-portfolio"
              $isActive={router.pathname === "/graphic-portfolio"}
              onClick={() => setShowPortfolioSubmenu(false)}
            >
              GRAPHIC DESIGN
            </StyledSubMenuLink>
          </PortfolioSubmenuContainer>
        )}
      </StyledPortfoliosContainer>

      <StyledLink href="/contact" $isActive={router.pathname === "/contact"}>
        CONTACT
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  width: 94vw;
  max-width: 700px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 30px;
  min-height: 2.7rem;
  box-shadow: 4px 4px #000;
  border-radius: 8px;
  z-index: 2;
`;

const StyledPortfoliosContainer = styled.div`
  flex-grow: 1;
  position: relative;
`;

const StyledNavButton = styled.button`
  font-size: 0.8rem;
  font-family: inherit;
  font-weight: ${(props) => (props.$isActive ? "500" : "400")};
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  height: 100%;
  width: 100%;
  background-color: ${(props) => (props.$isActive ? "#000" : "#fff")};
  border: none;
  border-top: 3px solid #000;
  border-bottom: 3px solid #000;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: #fff;
    background-color: #000;
  }
  @media screen and (min-width: 600px) {
    font-size: 0.95rem;
  }
`;

const PortfolioSubmenuContainer = styled.div`
  position: absolute;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const StyledSubMenuLink = styled(Link)`
  padding: 10px;
  min-height: 2.7rem;
  font-size: 0.8rem;
  font-weight: ${(props) => (props.$isActive ? "500" : "400")};
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  text-decoration: none;
  text-align: center;
  align-content: center;
  background-color: ${(props) => (props.$isActive ? "#000" : "#fff")};
  border-left: 3px solid #000;
  border-right: 3px solid #000;
  box-shadow: 4px 4px #000;
  cursor: pointer;
  flex-grow: 1;
  transition: all 0.25s ease;

  &:hover {
    color: #fff;
    background-color: #000;
  }
  &:nth-last-of-type(1) {
    border-bottom: 3px solid #000;
    border-radius: 0 0 8px 8px;
  }

  @media screen and (min-width: 600px) {
    font-size: 0.95rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: ${(props) => (props.$isActive ? "500" : "400")};
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  text-decoration: none;
  text-align: center;
  align-content: center;
  background-color: ${(props) => (props.$isActive ? "#000" : "#fff")};
  border-top: 3px solid #000;
  border-bottom: 3px solid #000;
  cursor: pointer;
  flex-grow: 1;
  transition: all 0.25s ease;

  &:hover {
    color: #fff;
    background-color: #000;
  }

  &:nth-of-type(1) {
    border-left: 3px solid #000;
    border-radius: 8px 0 0 8px;
  }

  &:nth-last-of-type(1) {
    border-right: 3px solid #000;
    border-radius: 0 8px 8px 0;
  }

  @media screen and (min-width: 600px) {
    font-size: 0.95rem;
  }
`;
