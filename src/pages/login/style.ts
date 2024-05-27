import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContentForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8125rem; /* 13px */
  position: relative;
  z-index: 1000;
`;

export const FeedBack = styled.p`
  position: absolute;
  top: 9rem; /* 144px */
  font-size: 1.25rem; /* 20px */
  font-weight: 600;

  &.Err {
    color: red;
  }

  &.Great {
    color: green;
  }
`;

export const ContentLabel = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;

  color: #727070;
  font-size: 1.25rem; /* 20px */
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const InputText = styled.input`
  width: 24rem; /* 412px */
  height: 3.875rem; /* 62px */
  border-radius: 0.625rem; /* 10px */
  border: 1px solid #939393;
  padding-left: 0.875rem; /* 14px */
  margin-top: 0.3125rem; /* 5px */
  outline: none;
  background-color: transparent;

  color: #727070;
  font-size: 1rem; /* 16px */
`;

export const ImageRobo = styled.img`
  position: absolute;
  left: 13rem; /* 208px */
  bottom: -14rem; /* -224px */
  z-index: -1;

  &.RoboTwo {
    bottom: -16rem; /* -256px */
    left: 0;
  }

  @media (max-width: 630px) {
    display: none;
  }
`;

export const ResetPassword = styled.div`
  position: absolute;
  top: 13.2rem; /* 163.2px */
  left: 0;
  color: #fff;
  font-size: 1.25rem; /* 20px */
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ButtonLogin = styled.button`
  width: 11.5625rem; /* 185px */
  height: 4.125rem; /* 66px */
  border-radius: 0.625rem; /* 10px */
  background: rgba(255, 255, 255, 0.48);

  color: #9d18e1;
  font-size: 1.25rem; /* 20px */
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 16rem; /* 208px */
`;
