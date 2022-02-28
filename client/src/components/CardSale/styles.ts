import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 2rem;
  background-color: var(--highlight);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (min-width: 1080px) {
    width: 35%;    
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
    font-size: 14px;
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