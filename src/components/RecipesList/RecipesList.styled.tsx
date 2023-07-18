import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 20px;
  margin-bottom: 20px;

  & li {
    flex-basis: calc((100% - (4 * 20px)) / 5);
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;

  color: inherit;
`;
