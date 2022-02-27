import styled from "styled-components";
import { Heart } from '@styled-icons/boxicons-solid'
export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  max-width: 140px;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 4px;
  padding: 2rem;
  gap: 1rem;  

  @media (min-width: 1080px) {
    max-width: 200px;    
    background-color: var(--background-contrast);
  }

  div {
    width: 100%;
    align-items: flex-start;    
    padding: 10px;
  }

  img {
    width: 100px;

    @media (min-width: 1080px) {    
      width: 130px;      
    }
  }

  section {
    display: flex;    
    width: 12rem;    
    flex-direction: column;    
    
    padding-top: var(--small);
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
      width: 100%;
      
      h1 {
        font-size: 1.9rem;
      }

      span {
        font-size: 1.5rem;
      }
    }
  }
`;

export const HeartIcon = styled(Heart)`
  width: 20px;
  color: #A9A9A9;
  cursor: pointer;
  
  @media (min-width: 1080px) {    
    width: 25px;      
  }
`;