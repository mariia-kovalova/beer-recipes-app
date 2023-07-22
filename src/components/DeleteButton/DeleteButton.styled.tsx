import styled from "@emotion/styled/macro";
import { CiTrash } from "react-icons/ci";

export const Button = styled.button`
  position: fixed;
  top: 82px;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 5px;

  border-radius: 50%;
  background-color: #f0bbbb;

  transition: background-color 250ms ${({ theme }) => theme.cubic};

  &:hover {
    background-color: ${({ theme }) => theme.bgcHoverFocusLinks};
  }
`;

export const StyledBinIcon = styled(CiTrash)`
  color: ${({ theme }) => theme.colText};
  font-size: 36px;
  transition: color 250ms ${({ theme }) => theme.cubic};

  ${Button}:hover & {
    color: red;
  }
`;
