import { FC, MouseEvent } from "react";
import { IRecipe } from "../../shared/types/Recipe.interface";
import { List, StyledLink } from "./RecipesList.styled";
import { Recipe } from "../Recipe";
import { useLocation } from "react-router";
import { recipes as recipesRoute } from "../../shared/constants/routes";
import { useRecipesStore } from "../../store/recipesStore";
import { selectToggleIsSelected } from "../../store/recepiesSelectors";

interface IProps {
  recipes: IRecipe[];
}

export const RecipesList: FC<IProps> = ({ recipes }) => {
  const location = useLocation();

  const toggleIsSelected = useRecipesStore(selectToggleIsSelected);

  const handleContextMenu = (event: MouseEvent<HTMLElement>, id: number) => {
    event.preventDefault();
    toggleIsSelected(id);
  };

  return (
    <List>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <StyledLink
            to={`${recipesRoute}/${recipe.id}`}
            state={{ from: location }}
            onContextMenu={(event) => handleContextMenu(event, recipe.id)}
          >
            <Recipe {...recipe} />
          </StyledLink>
        </li>
      ))}
    </List>
  );
};
