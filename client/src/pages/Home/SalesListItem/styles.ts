import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  max-height: 190px;  
  margin-top: var(--small);
  border-radius: 3px;
  background-color: var(--white);
  padding: var(--small);

  span {
    width: 30%;
    height: 2rem;      
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;                
    background-color: var(--background-contrast);

    p {
      font-size: 9px;
      color: var(--text);
    }
  }

  div {
    display: flex;
    flex-direction: column;    
    gap: var(--small);

    img {
      height: 100px;      
    }

    strong {
      font-size: var(--small);
      color: var(--black);
    }
  }

`;