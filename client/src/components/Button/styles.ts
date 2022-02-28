import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 100%;
  max-width: 400px;  
  align-items: center;
  justify-content: center;  
  border: 0;
  padding: 18px;
  cursor: pointer;
  text-decoration: none;
  background-color: var(--highlight);
  border-radius: 5px;
  transition: 0.25s;
  
  strong {    
    color: var(--white);
    font-size: 2rem;    
  }

  &:hover {
    filter: brightness(0.3);
  }
`;