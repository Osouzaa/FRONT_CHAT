import styled from "styled-components";

export const Header = styled.header`
  background: #d9d9d9;
  width: 100%;
  height: 155px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div,
  img {
    margin: 0 2rem;
  }

  > img {
    width: 8rem;

    @media (max-width: 550px) {
      width: 4rem;
    }
  }
`;

export const ContentList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.06rem;

  li {
    list-style: none;
    color: #000;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
  }

  @media (max-width: 550px) {
    gap: 3rem;
    li {
      font-size: 1rem;
    }
  }
`;

export const ContentCircle = styled.div`
  background-color: #9d18e1;
  width: 4.6875rem;
  height: 4.6875rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
