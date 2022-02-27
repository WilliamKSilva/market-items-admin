import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  width: 250px;
  flex-direction: column;  
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 4px;
  padding: var(--medium);

  @media (min-width: 1080px) {
    background-color: var(--background-contrast);
    width: 390px;    
  }

  img {
    width: 100px;

    @media (min-width: 1080px) {
      width: 120px;    
    }
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

    @media (min-width: 1080px) {
      
      h1 {
        font-size: 1.8rem;
      }
      
      span {
        font-size: 1.5rem;
      }
    }
  }
  
`;