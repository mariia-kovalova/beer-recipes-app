import { FC } from "react";
import { GoBackLink, StyledBackIcon } from "./GoBack.styled";

interface IProps {
  path: string;
}

export const GoBack: FC<IProps> = ({ path }) => {
  return (
    <GoBackLink to={path}>
      <StyledBackIcon />
      <span>Go back</span>
    </GoBackLink>
  );
};
