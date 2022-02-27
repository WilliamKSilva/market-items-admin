import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 13vh;
  align-items: center;
  justify-content: center;
  background-color: var(--highlight);    
`;

export const Content = styled.section`
  display: flex;
  width: 70%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  
  h1 {
    font-size: var(--medium);
    color: var(--white);
    font-weight: 700;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--large);

    a {
      font-size: 2rem;
      color: var(--white);
      cursor: pointer;
      
      transition: transform 0.1s;
      -webkit-transition: -webkit-transform 0.35s;
      
      &:hover {
        transform: scale(1); -webkit-transform: scale(1.10);                     
      }
    }
  }
`;