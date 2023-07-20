import { FC } from "react";
import { IRecipe } from "../../shared/types/Recipe.interface";
import { Card, Name, Wrap } from "./Recipe.styled";
import { textNormalize } from "../../shared/helpers/textNormalize";

export const Recipe: FC<IRecipe> = ({ id, name, tagline, image_url }) => {
  return (
    <Card>
      <Wrap>
        <img src={image_url} alt={name} width="60" loading="lazy" />
      </Wrap>
      <p>{id}</p>
      <Name>{textNormalize.name(name)}</Name>
      <p>{textNormalize.tagline(tagline)}</p>
    </Card>
  );
};
