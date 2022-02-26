import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  max-width: 140px;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 4px;
  padding: 2rem;

  img {
    width: 100px;
  }

  section {
    display: flex;    
    width: 12rem;    
    flex-direction: column;    
    
    padding-top: var(--medium);
    gap: 5px;

    h1 {
      font-size: 1.5rem;
      color: var(--title);    
    }

    span {
      font-size: 1.2rem;
      color: var(--highlight);
    }
  }
  
`;