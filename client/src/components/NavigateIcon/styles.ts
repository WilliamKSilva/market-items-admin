import styled from "styled-components";

export const LinkWrapper = styled.a`
  display: flex;  
  align-items: center;
  justify-content: center;
  flex-direction: column;   
`;

export const Link = styled.p`
  width: 50px;
  display: flex;
  padding: 1.2rem;
  justify-content: center;
  background-color: var(--background-contrast);
  border-radius: 45px;  
`;

export const LinkName = styled.p`
  font-size: 1.2rem;
  color: var(--text);

  @media (min-width: 1080px) {
    font-size: 1.8rem;
  }
`;


