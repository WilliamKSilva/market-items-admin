import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  width: 150px;
  max-height: 200px;  
  margin-top: var(--small);
  border-radius: 3px;
  background-color: var(--white);
  padding: var(--small);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (min-width: 1080px) {            
    background-color: var(--background);    
  }

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

    @media (min-width: 1080px) {            
      p {
        font-size: 15px;
      }
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

    @media (min-width: 1080px) {            
      strong {                 
        font-size: 1.7rem;
        align-self: center;                
      }
      
      img {
        height: 110px;
      }
    }
  }

`;