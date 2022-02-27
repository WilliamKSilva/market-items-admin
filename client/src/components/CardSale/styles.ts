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

  @media (min-width: 1080px) {
    width: 35%;
    align-self: center;
  }
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

  @media (min-width: 1080px) {
    strong {
      font-size: 1.6rem;
    }

    p {
      font-size: var(--small);
    }
  }
`;

export const ItemImage = styled.img`
  height: 55px;
  
  @media (min-width: 1080px) {
    height: 70px;
  }
`;