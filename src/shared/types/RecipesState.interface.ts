import { IRecipe } from "./Recipe.interface";
import { AxiosError } from "axios";

export interface IRecipesState {
  recipes: IRecipe[];
  currentRecipe: IRecipe | null;
  isLoading: boolean;
  error: null | AxiosError;
  getAll: (page: number) => void;
  getById: (id: number | string) => void;
  removeById: (recipeId: number) => void;
}
