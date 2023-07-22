import { IRecipe } from "./Recipe.interface";
import { AxiosError } from "axios";

export interface IRecipesState {
  recipes: IRecipe[];
  selected: number[];
  currentRecipe: IRecipe | null;
  isLoading: boolean;
  error: null | AxiosError;
  get: (page: number) => void;
  getById: (id: number) => void;
  reduceRecipes: (index: number) => void;
  toggleIsSelected: (id: number) => void;
  removeSelectedRecipes: () => void;
}
