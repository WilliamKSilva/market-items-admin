import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  align-items: center;  
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

export const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--medium);
`

export const WrapperInputs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: var(--small);
  padding-top: var(--small);
`;

export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  padding-top: var(--medium);
  padding-bottom: var(--small);
`;