import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9d18e1;
  height: 120px;
  margin: 0 auto;
  border-radius: 0 0 100px 100px;
  gap: 3rem;

  @media screen and (max-width: 550px) {
    border-radius: 0 0 50px 50px;
  }
`;

export const ItemHeader = styled.li`
  list-style: none;
  color: #ffff;
  font-size: 1.25rem;
  line-height: 0.0725rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #cecece;
  }

  @media screen and (max-width: 550px) {
    font-size: 0.75rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 1100px) {
    gap: 1rem;
    padding: 0 1rem;
    align-items: center;

  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    overflow-y: auto;
    padding: 0.75rem;
    gap: 0.5rem;
  }
`;

export const ContainerOne = styled.div`
  width: 40rem;
  height: 40rem;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 1.25rem;
  box-shadow: 1px -6px 5px 0px rgba(165, 143, 143, 0.43);

  @media screen and (max-width: 1100px) {
    width: 28rem;
    height: 30rem;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: 24rem;
  }
`;

export const ContainerTwo = styled.div`
  width: 30rem;
  height: 30rem;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 1.32rem;
  box-shadow: 1px -6px 5px 0px rgba(165, 143, 143, 0.43);

  @media screen and (max-width: 550px) {
    width: 100%;
    height: 24rem;
  }
`;

export const ContentName = styled.div`
  width: 100%;
  display: block;
  padding: 1.25rem;

  h3 {
    font-size: 1.5rem;
    color: #000;
    line-height: 1.25rem;
    margin-bottom: 0.6rem;
  }

  span {
    font-size: 1rem;
    color: #313131;
    font-weight: 500;
  }

  @media screen and (max-width: 550px) {
    h3 {
      font-size: 1rem;
    }
  }
`;

export const ContentItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-bottom: 1px solid red;
  font-weight: 600;

  span {
    text-decoration: line-through;
    color: red;
  }
`;

export const ContentImage = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    img {
      width: 90%;
    }
  }

  @media screen and (max-width: 550px) {
    height: 50%;
    img {
      width: 90%;
      margin-top: 3rem;
    }
  }
`;

export const ContentForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const TextP = styled.p`
  display: block;
  font-size: 1.02rem;
  font-weight: 600;
`;

export const SpanText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b10509;
  font-weight: 600;
  margin-bottom: 1rem;
`;
