import styled from "styled-components";
import { ArrowBack } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  align-items: center; 
  justify-content: center;   
`;

export const Content = styled.div`
  display: flex;  
  flex-direction: column;    
  width: 100%;
  height: 90%;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  

  @media (min-width: 1080px) {
    width: 50%;        
    background-color: var(--white);
    border-radius: 4px;
    padding: var(--large);
  }
`;

export const Heading = styled.header`
  display: flex;
  justify-content: flex-start;    
  flex-direction: row;
  align-items: center;
  gap: var(--small);
  padding-bottom: var(--small);

  h1 {
    font-size: 2.5rem;
    color: var(--title);
  }
`;

export const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--medium);  
`;

export const WrapperInputs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: var(--small);
  padding-top: var(--small);

  @media (min-width: 1080px) {
    width: 50%;
    align-self: center;    
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  padding-top: var(--medium);
  padding-bottom: var(--small);

  @media (min-width: 1080px) {    
    padding-top: var(--large);    
    align-items: center;
    justify-content: center;    
  }
`;

export const ArrowIcon = styled(ArrowBack)`
  width: 40px;
  color: var(--title);
  cursor: pointer;
`;