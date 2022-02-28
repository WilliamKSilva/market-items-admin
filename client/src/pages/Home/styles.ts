import styled from "styled-components";
import { Menu, Heart, AddToQueue } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  height: 87vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: var(--background);  
  flex-direction: column;

  @media (min-width: 1080px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;   
  flex-direction: column;
  overflow: auto;  

  width: 100%;
  height: 90%;
  padding: 10px;
  
  @media (min-width: 1080px) {
    width: 50%;        
    background-color: var(--white);
    border-radius: 4px;
    padding: var(--large);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Heading = styled.header`  
  width: 100%;
  padding-bottom: var(--medium);
  
  h1 {
    font-size: var(--medium);
    color: var(--title);    
  }

  @media (min-width: 1080px) {
    padding-bottom: var(--large);

    h1 {
      font-size: 3.5rem;
    }
  }
`;

export const WrapperNavigateIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;  
  align-items: center;
  flex-direction: row;
  padding-top: var(--large);  

  gap: 2rem;

  @media (min-width: 1080px) {
    gap: 5rem;
  }
`;

export const ContainerSales = styled.main`
  display: flex;  
  width: 100%;  
  flex-direction: column;
  padding-top: var(--medium);
  padding-bottom: var(--medium);  

  h2 {
    display: flex;
    align-self: center;
    font-size: 2rem;
    color: var(--title);
  }

  section {
    display: flex;
    width: 100%;    
    align-items: center;
    justify-content: center;
    gap: var(--small);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1080px) {
    padding-top: 8rem;
    gap: var(--medium);
    
    h2 {
      font-size: var(--medium);
    }

    section {
      gap: var(--large);            
    }
  }
`;


export const MenuIcon = styled(Menu)`
  width: 23px;
`;

export const HeartIcon = styled(Heart)`
  width: 23px;
`;

export const AddIcon = styled(AddToQueue)`
  width: 23px;
`;
