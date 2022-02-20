import styled from "styled-components";
import { Menu, Heart, Gift, UserCheck } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: var(--background);
  justify-content: center;      
`;

export const Content = styled.div`
  display: flex;   
  flex-direction: column;

  width: 100%;
  height: 90%;
  padding: 10px;  
`;

export const Heading = styled.header`  
  width: 100%;
  padding-bottom: var(--medium);
  
  h1 {
    font-size: var(--medium);
    color: var(--title);
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
`;


export const MenuIcon = styled(Menu)`
  width: 23px;
`;

export const HeartIcon = styled(Heart)`
  width: 23px;
`;

export const GiftIcon = styled(Gift)`
  width: 23px;
`;

export const UserCheckIcon = styled(UserCheck)`
  width: 23px;
`;
