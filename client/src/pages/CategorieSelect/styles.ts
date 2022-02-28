import styled from "styled-components";
import { ArrowBack } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 87vh;
  background-color: var(--background);
  justify-content: center;
  align-items: center;  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;        
  width: 100%;
  height: 90%;
  padding: 20px;  

  @media (min-width: 1080px) {
    width: 50%;        
    background-color: var(--white);
    border-radius: 4px;
    padding: var(--large);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

export const WrapperCategoriesCards = styled.div`
  display: flex;
  padding-top: var(--large);
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--large);
`;

export const ArrowIcon = styled(ArrowBack)`
  width: 40px;
  color: var(--title);
  cursor: pointer;
`;