import { FC } from "react";
import { IRecipe } from "../../shared/types/Recipe.interface";
import { Card, Description, Name, Tagline, Wrap } from "./Recipe.styled";
import { textNormalize } from "../../shared/helpers/textNormalize";

export const Recipe: FC<IRecipe> = ({
  id,
  name,
  tagline,
  description,
  image_url,
}) => {
  return (
    <Card>
      <Wrap>
        <img src={image_url} alt={name} width="60" loading="lazy" />
      </Wrap>
      <Name>{textNormalize.name(name)}</Name>
      <Tagline>{textNormalize.tagline(tagline)}</Tagline>
      <Description>{textNormalize.description(description)}</Description>
    </Card>
  );
};
