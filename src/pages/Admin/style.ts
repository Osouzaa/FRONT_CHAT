import styled from "styled-components";

interface MessageProps {
  sender: "user" | "bot";
}

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

export const ContentTitle = styled.h2`
  display: block;
  text-align: center;
  font-family: "Jolly Lodger";
  color: #9d18e1;
  font-size: 3.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 1rem 0;
`;

export const ImageRobo = styled.img`
  position: absolute;

  &.left {
    bottom: 0;
    left: 0;

    @media (max-width: 1350px) {
      width: 250px;
    }
  }

  &.right {
    right: 0;
    bottom: 0;

    @media (max-width: 1350px) {
      width: 250px;
    }
  }
`;
export const ContentConversa = styled.div`
  margin: 0 auto;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.69);
  width: 50%;
  height: 34.75rem;
  border-radius: 10px;
  overflow-y: auto;

  @media (max-width: 1350px) {
    height: 450px;
    overflow-y: scroll !important;
  }
`;

export const HeaderConversa = styled.div`
  width: 100%;
  height: 3.875rem;
  background: #9d18e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  > p {
    margin: 0 3rem;
    color: #fff;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div<MessageProps>`
  max-width: 60%;

  padding: 15px;
  margin: 5px 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.sender === "user" ? "#dcf8c6" : "#fff"};
  align-self: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;
