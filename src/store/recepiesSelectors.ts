import { IRecipesState } from "../shared/types/RecipesState.interface";

export const selectRecipes = (state: IRecipesState) => state.recipes;
export const selectCurrentRecipe = (state: IRecipesState) =>
  state.currentRecipe;
export const selectIsLoading = (state: IRecipesState) => state.isLoading;
export const selectError = (state: IRecipesState) => state.error;

export const selectGet = (state: IRecipesState) => state.get;
export const selectGetById = (state: IRecipesState) => state.getById;
export const selectRemoveById = (state: IRecipesState) => state.removeById;
