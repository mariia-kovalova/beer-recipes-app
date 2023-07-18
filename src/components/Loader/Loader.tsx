import { FC } from "react";
import { Oval } from "react-loader-spinner";
import { Overlay } from "./Loader.styled";

export const Loader: FC = () => {
  return (
    <Overlay>
      <Oval
        height={60}
        width={60}
        color="#d97706"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#d97706"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Overlay>
  );
};
