import { create } from "zustand";
import { IRecipesState } from "../shared/types/RecipesState.interface";
import { AxiosError } from "axios";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { recipesApi } from "../api/recipes.api";

export const useRecipesStore = create<IRecipesState>()(
  persist(
    immer((set) => ({
      recipes: [],
      selected: [],
      deleted: [],
      currentRecipe: null,
      isLoading: false,
      error: null,
      get: async (page) => {
        try {
          set({ error: null, isLoading: true });
          const recipes = await recipesApi.get(page);
          set((state) => ({
            recipes: page === 1 ? recipes : [...state.recipes, ...recipes],
          }));
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
      reduceRecipes: (index) => {
        set((state) => ({ recipes: state.recipes.slice(index) }));
      },
      toggleIsSelected: (id) => {
        set((state) => ({
          selected: state.selected.includes(id)
            ? state.selected.filter((currentId) => currentId !== id)
            : [...state.selected, id],
        }));
      },
      removeSelectedRecipes: () => {
        set((state) => ({
          recipes: state.recipes.filter(
            ({ id }) => !state.selected.includes(id)
          ),
          deleted: [...state.deleted, ...state.selected],
          selected: [],
        }));
      },
    })),
    { name: "zustand/recipes" }
  )
);
