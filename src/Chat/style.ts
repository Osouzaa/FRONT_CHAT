import styled from "styled-components";

interface MessageProps {
  sender: "user" | "bot";
}

export const Container = styled.div`
  width: 22rem;
  height: 37.5rem;
  background: #cecece;
  border-radius: 8px 8px 0 0;
  position: fixed;
  bottom: 0rem;
  right: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 760px) {
    right: 1.3rem;

    &.closeChat {
      right: -22rem;
    }
  }

  &.closeChat {
    bottom: -32rem;
  }
`;

export const HeaderChat = styled.header`
  position: relative;
  width: 100%;
  height: 74px;
  background: #9d18e1;
  border-radius: 8px 8px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  img {
    position: absolute;
    top: -4rem;
    right: 15rem;
    width: 10rem;
    object-fit: cover;

    @media (max-width: 760px) {
      &.openChat {
        transform: rotate(-90deg);
        right: 17rem;
      }
    }
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-left: 3rem;
`;

export const TitleHeader = styled.h2`
  color: #f2f2f2;
  font-size: 1.25rem;
`;

export const ContentMessage = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div<MessageProps>`
  background: ${(props) => (props.sender === "user" ? "#d1e7dd" : "#f8d7da")};
  color: #202024;
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  align-self: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 0.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  outline: none;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #7d16a2;
  color: white;
  border-radius: 4px;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #9d18e1;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const OptionButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:active {
    background-color: #3e8e41;
  }

  &.Not {
    background-color: #f75a68;
  }

  &:focus {
    outline: none;
  }
`;
