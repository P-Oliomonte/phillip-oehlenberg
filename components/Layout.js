import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Layout({ children, page }) {
  const router = useRouter();

  return (
    <>
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

        <StyledLink
          href="/portfolio"
          $isActive={router.pathname === "/portfolio"}
        >
          PORTFOLIO
        </StyledLink>

        <StyledLink href="/contact" $isActive={router.pathname === "/contact"}>
          CONTACT
        </StyledLink>
      </StyledNavigation>
      <div>{children}</div>
    </>
  );
}

const StyledNavigation = styled.nav`
  width: 94vw;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 30px;
  height: 3rem;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: ${(props) => (props.$isActive ? "500" : "400")};
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  text-decoration: none;
  text-align: center;
  align-content: center;
  height: 100%;
  background-color: ${(props) => (props.$isActive ? "#000" : "#fff")};
  border-top: 3px solid #000;
  border-bottom: 3px solid #000;
  box-shadow: 4px 4px #000;
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
`;
