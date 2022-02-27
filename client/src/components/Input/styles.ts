import styled from "styled-components";

export const Container = styled.input`
  display: flex;
  width: 100%;
  background-color: var(--background);
  padding: var(--small);
  border: none;
  border-bottom: 2px solid var(--input);
  font-size: 2rem;
  color: var(--title);
  
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: var(--title);
  }
  
  @media (min-width: 1080px) {
    background-color: var(--white);    
  }
`;