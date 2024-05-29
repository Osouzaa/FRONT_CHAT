import { TableCell, TableHead } from "@mui/material";
import styled from "styled-components";

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
    @media (max-width: 550px) {
      width: 100px;
    }
  }

  &.right {
    right: 0;
    bottom: 0;

    @media (max-width: 1350px) {
      width: 200px;
    }
    @media (max-width: 550px) {
      width: 100px;
    }
  }
`;

export const ContentTable = styled.div`
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: 1350px) {
    width: 70%;
  }

  @media (max-width: 550px) {
    margin: 0;
    width: 95%;
    height: 320px;
    overflow-y: auto;
  }
`;

export const StyledTableHead = styled(TableHead)`
  background: #9d18e1;
`;

export const StyleItem = styled(TableCell)`
  color: #ffffff !important;
  font-size: 15px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: normal !important;
  text-align: center !important;

  &:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }
  &:nth-child(6) {
    border-radius: 0 10px 10px 0px;
  }

  @media (max-width: 550px) {
    font-size: 13px !important;
  }
`;

export const LinhaStyle = styled(TableCell)`
  color: #000 !important;
  font-size: 15px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: normal !important;
  text-align: center !important;

  button {
    cursor: pointer;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    padding: 0.5rem 1.25rem;
    color: #000;
    font-size: 0.93rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @media (max-width: 550px) {
    font-size: 13px !important;
  }
`;

export const ContentCSV = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 100%;
  cursor: pointer;

  p {
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
