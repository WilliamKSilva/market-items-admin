import styled from "styled-components";
import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;  
  justify-content: space-between;  
  padding: 2.2rem;
  background-color: var(--white);  
  border-radius: 4px;
  cursor: pointer;

  @media (min-width: 1080px) {
    background-color: var(--background-contrast);
    width: 45%;    
  }

  p {    
    font-size: 1.8rem;    
    color: var(--title);
    font-weight: 500;
  }
`;

export const RightArrowIcon = styled(RightArrow)`
  width: 20px;
  color: var(--title);
`;