import { FC } from "react";
import { IRecipe } from "../../shared/types/Recipe.interface";
import { List, StyledLink } from "./RecipesList.styled";
import { Recipe } from "../Recipe";
import { useLocation } from "react-router";
import { recipes as recipesRoute } from "../../shared/constants/routes";

interface IProps {
  recipes: IRecipe[];
}

export const RecipesList: FC<IProps> = ({ recipes }) => {
  const location = useLocation();

  return (
    <List>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <StyledLink
            to={`${recipesRoute}/${recipe.id}`}
            state={{ from: location }}
          >
            <Recipe {...recipe} />
          </StyledLink>
        </li>
      ))}
    </List>
  );
};
