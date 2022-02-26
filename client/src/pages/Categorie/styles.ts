import styled from 'styled-components'
import { ArrowBack } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;    
  width: 100%;
  height: 90%;
  padding: 20px;
`;

export const Heading = styled.header`
  display: flex;
  justify-content: flex-start;    
  flex-direction: column;
  gap: var(--small);
  padding-bottom: var(--small);

  h1 {
    font-size: 2.5rem;
    color: var(--title);
  }
`;

export const WrapperCategoriesCards = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: var(--small);
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ArrowIcon = styled(ArrowBack)`
  width: 40px;
  color: var(--title);
`;