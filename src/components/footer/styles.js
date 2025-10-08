import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 7vh;
  width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 50vw;
`;

export const IconLink = styled.a`
  color: #333;
  transition: 0.3s;

  &:hover {
    color: #c9bd20ff;
  }
`;

export const SiteLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;
