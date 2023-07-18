import styled from "@emotion/styled";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export const GoBackLink = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colText};
  :hover,
  :focus {
    color: ${({ theme }) => theme.accent};
  }
`;

export const StyledBackIcon = styled(BsArrowLeftCircle)`
  font-size: 20px;
`;
