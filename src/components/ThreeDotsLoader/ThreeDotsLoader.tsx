import { ThreeDots } from "react-loader-spinner";
import { Wrap } from "./ThreeDotsLoader.styled";

export const ThreeDotsLoader = () => (
  <Wrap>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#d97706"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  </Wrap>
);
