import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 2rem;
  background-color: var(--highlight);
  border-radius: 5px;
`;

export const ItemInfo = styled.section`
  display: flex;
  flex-direction: column;
  
  strong {
    font-size: var(--small);    
    color: var(--white);
  }

  p {
    font-size: 10px;
    color: var(--white);
  }
`;

export const ItemImage = styled.img`
  height: 55px;  
`;