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

  img {
    width: 100px;
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
  }
  
`;