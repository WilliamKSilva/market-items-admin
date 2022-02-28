import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 130vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--medium);
  width: 300px;
  height: 300px;
  border-radius: 8px;
  background-color: var(--background);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  gap: 2rem;  

  p {
    font-size: 2.5rem;
    text-align: center;    
    font-weight: 700;
    width: 250px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre-wrap;
    color: var(--title);
    padding-bottom: var(--large);
  }
`;

export const WrapperButton = styled.div`
  width: 50%;    
`;