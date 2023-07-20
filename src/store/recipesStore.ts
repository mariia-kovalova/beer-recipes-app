import { create } from "zustand";
import { IRecipesState } from "../shared/types/RecipesState.interface";
import { AxiosError } from "axios";
import { immer } from "zustand/middleware/immer";
import { recipesApi } from "../api/recipes.api";

export const useRecipesStore = create<IRecipesState>()(
  immer((set) => ({
    recipes: [],
    currentRecipe: null,
    isLoading: false,
    error: null,
    get: async (page) => {
      try {
        set({ error: null, isLoading: true });
        const recipes = await recipesApi.get(page);
        set((state) => {
          state.recipes = recipes;
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
        const recipe = await recipesApi.getById(id);
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
