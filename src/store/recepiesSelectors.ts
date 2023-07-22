import { IRecipesState } from "../shared/types/RecipesState.interface";

export const selectRecipes = (state: IRecipesState) => state.recipes;
export const selectSelected = (state: IRecipesState) => state.selected;
export const selectCurrentRecipe = (state: IRecipesState) =>
  state.currentRecipe;
export const selectIsLoading = (state: IRecipesState) => state.isLoading;
export const selectError = (state: IRecipesState) => state.error;

export const selectGet = (state: IRecipesState) => state.get;
export const selectGetById = (state: IRecipesState) => state.getById;
export const selectReduceRecipes = (state: IRecipesState) =>
  state.reduceRecipes;
export const selectRemoveSelectedRecipes = (state: IRecipesState) =>
  state.removeSelectedRecipes;
export const selectToggleIsSelected = (state: IRecipesState) =>
  state.toggleIsSelected;
