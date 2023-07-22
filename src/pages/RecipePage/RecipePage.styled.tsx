import styled from "@emotion/styled";
import { desktop, tablet } from "../../shared/constants/devicesSizes";

export const Recipe = styled.div`
  padding-top: 40px;
  margin: 0 auto;

  @media screen and (min-width: ${desktop}) {
    max-width: ${tablet};
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  text-align: center;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;

  @media screen and (min-width: ${tablet}) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  text-align: center;
`;
