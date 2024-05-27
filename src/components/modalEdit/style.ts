import styled from "styled-components";

export const ModalBG = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ContainerModal = styled.div`
  width: 40%;
  max-height: 80vh;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: #9d18e1;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-radius: 8px 8px 0 0;

  button {
    background-color: transparent;
    border-radius: 20px;
    height: 3rem;
    width: 3rem;
    border: 2px solid #ffff;
    cursor: pointer;
    transition: 0.5s all;
    font-weight: 500;
    font-size: 1.4rem;

    &:hover {
      color: #fff;
    }
  }
`;

export const ContentTitle = styled.h2`
  display: block;
  text-align: center;
  color: #ffffff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 1rem 0;
`;

export const ContentForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  gap: 1.5rem;
  flex-grow: 1;
`;

export const ContentButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 3.4rem;

  button {
    padding: 0.7rem 1.85rem;
    background-color: #9d18e1;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    transition: 1s all;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      border: 1px solid #9d18e1;
      color: #000;
    }
  }
`;

