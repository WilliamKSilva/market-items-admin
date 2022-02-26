import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 100%;
  max-width: 320px;  
  align-items: center;
  justify-content: center;  
  border: 0;
  padding: 12px;
  text-decoration: none;
  background-color: var(--highlight);
  border-radius: 5px;
  
  strong {    
    color: var(--white);
    font-size: var(--small);    
  }
`;