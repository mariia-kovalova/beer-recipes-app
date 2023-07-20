import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { desktop, tablet } from "../../shared/constants/devicesSizes";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 20px;
  margin-bottom: 20px;

  & li {
    flex-basis: 100%;

    @media screen and (min-width: ${tablet}) {
      flex-basis: calc((100% - (2 * 20px)) / 3);
    }

    @media screen and (min-width: ${desktop}) {
      flex-basis: calc((100% - (4 * 20px)) / 5);
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;

  color: inherit;
`;
