import { selectRemoveSelectedRecipes } from "../../store/recepiesSelectors";
import { useRecipesStore } from "../../store/recipesStore";
import { Button, StyledBinIcon } from "./DeleteButton.styled";

export const DeleteButton = () => {
  const removeSelectedRecipes = useRecipesStore(selectRemoveSelectedRecipes);

  return (
    <Button type="button" onClick={removeSelectedRecipes}>
      <StyledBinIcon />
    </Button>
  );
};
