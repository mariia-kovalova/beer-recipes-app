import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useRecipesStore } from "../../store/recipesStore";
import {
  selectCurrentRecipe,
  selectError,
  selectGetById,
  selectIsLoading,
} from "../../store/recepiesSelectors";

import { home } from "../../shared/constants/routes";

import { Helmet } from "react-helmet-async";
import { Section } from "../../shared/styles/components/Section.styled";
import { Container } from "../../shared/styles/components/Container.styled";
import { Loader } from "../../components/Loader";
import { GoBack } from "../../components/GoBack";
import { Error } from "../../components/Error";
import { textNormalize } from "../../shared/helpers/textNormalize";
import { Description, Info, Name, Recipe, Wrap } from "./RecipePage.styled";

const RecipePage = () => {
  const location = useLocation();
  const path = location.state?.from ?? home;

  const { recipeId } = useParams();
  const getRecipeById = useRecipesStore(selectGetById);
  const recipe = useRecipesStore(selectCurrentRecipe);
  const isLoading = useRecipesStore(selectIsLoading);
  const error = useRecipesStore(selectError);

  useEffect(() => {
    if (recipeId) getRecipeById(Number(recipeId));
  }, [getRecipeById, recipeId]);

  const showRecipe = recipe && !isLoading && !error;
  const showError = !isLoading && error;

  return (
    <>
      <Helmet>
        <title>{textNormalize.title(recipe?.name || "", "Recipe")}</title>
      </Helmet>
      <Section>
        <Container>
          <GoBack path={path} />
          {showRecipe && (
            <Recipe>
              <Wrap>
                <img
                  src={recipe.image_url}
                  alt={recipe.name}
                  width="50"
                  loading="lazy"
                />
                <Info>
                  <Name>
                    # {recipe.id} {recipe.name}
                  </Name>
                  <p>{recipe.tagline}</p>
                </Info>
              </Wrap>
              <Description>{recipe.description}</Description>
            </Recipe>
          )}
          {isLoading && <Loader />}
          {showError && <Error />}
        </Container>
      </Section>
    </>
  );
};

export default RecipePage;
