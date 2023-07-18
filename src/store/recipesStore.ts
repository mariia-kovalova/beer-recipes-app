import { create } from "zustand";
import { IRecipesState } from "../shared/types/RecipesState.interface";
import { getRecipes } from "../api/recipesApi";
import { AxiosError } from "axios";
import { immer } from "zustand/middleware/immer";

export const useRecipesStore = create<IRecipesState>()(
  immer((set) => ({
    recipes: [],
    currentRecipe: null,
    isLoading: false,
    error: null,
    getAll: async (page) => {
      try {
        set({ error: null, isLoading: true });
        const recipes = await getRecipes.getAll(page);
        set((state) => {
          state.recipes = [...state.recipes, ...recipes];
        });
      } catch (error) {
        set({ error: error as AxiosError });
      } finally {
        set({ isLoading: false });
      }
    },
    getById: async (id) => {
      try {
        set({ error: null, isLoading: true });
        const recipe = await getRecipes.getById(id);
        set({ currentRecipe: recipe[0] });
      } catch (error) {
        set({ error: error as AxiosError });
      } finally {
        set({ isLoading: false });
      }
    },
    removeById: (recipeId) => {
      set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
      }));
    },
  }))
);
