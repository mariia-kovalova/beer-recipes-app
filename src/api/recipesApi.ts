import axios from "axios";
import { IRecipe } from "../shared/types/Recipe.interface";

axios.defaults.baseURL = "https://api.punkapi.com/v2/beers";

export const getRecipes = {
  getAll: async (page: number): Promise<IRecipe[]> => {
    const { data } = await axios.get("/", { params: { page } });
    return data;
  },
  getById: async (id: number | string): Promise<IRecipe[]> => {
    const { data } = await axios.get(`/${id}`);
    return data;
  },
};
