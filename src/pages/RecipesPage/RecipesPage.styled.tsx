import styled from "@emotion/styled";
import { tablet } from "../../shared/constants/devicesSizes";

export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;

  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colText};

  @media screen and (min-width: ${tablet}) {
    font-size: 20px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
`;

export const End = styled.p`
  text-align: center;
`;
