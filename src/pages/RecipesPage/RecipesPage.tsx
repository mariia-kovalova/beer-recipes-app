import { useEffect, useState, useRef } from "react";
import { useRecipesStore } from "../../store/recipesStore";
import {
  selectError,
  selectGet,
  selectIsLoading,
  selectRecipes,
} from "../../store/recepiesSelectors";

import { IRecipe } from "../../shared/types/Recipe.interface";
import {
  itemsPerPage,
  totalItems,
  visableItems,
} from "../../shared/constants/recipesApi";

import { End, Title, Wrap } from "./RecipesPage.styled";
import { Helmet } from "react-helmet-async";
import { Section } from "../../shared/styles/components/Section.styled";
import { Container } from "../../shared/styles/components/Container.styled";
import { RecipesList } from "../../components/RecipesList";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { ThreeDotsLoader } from "../../components/ThreeDotsLoader";

const RecipesPage = () => {
  const [page, setPage] = useState<number>(1);
  const [avaliableRecipes, setAvailableRecipes] = useState<IRecipe[]>([]);
  const [visibleRecipes, setVisibleRecipes] = useState<IRecipe[]>([]);

  const loadMoreTriggerRef = useRef(null);
  const getRecipes = useRecipesStore(selectGet);
  const recipes = useRecipesStore(selectRecipes);
  const isLoading = useRecipesStore(selectIsLoading);
  const error = useRecipesStore(selectError);

  useEffect(() => {
    getRecipes(page);
  }, [getRecipes, page]);

  useEffect(() => {
    setAvailableRecipes(recipes);
  }, [recipes]);

  useEffect(() => {
    const updateVisableRecipes = () => {
      if (visibleRecipes.length !== 0 && avaliableRecipes.length === 0)
        return setPage((prevPage) => prevPage + 1);

      if (visibleRecipes.length < visableItems) {
        const diff = visableItems - visibleRecipes.length;

        setVisibleRecipes((prevRecipes) => [
          ...prevRecipes,
          ...avaliableRecipes.slice(0, diff),
        ]);
        setAvailableRecipes((prevRecipes) => prevRecipes.slice(diff));
      }
    };

    updateVisableRecipes();
  }, [avaliableRecipes, visibleRecipes]);

  useEffect(() => {
    const handleObserver = (entries: any) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setVisibleRecipes((prevRecipes) => [...prevRecipes.slice(5)]);
      }
    };

    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreTriggerRef.current)
      observer.observe(loadMoreTriggerRef.current);

    return () => observer.disconnect();
  });

  const renderPreloader = recipes?.length === 0 && isLoading;
  const renderLoader = recipes?.length > 0 && isLoading;
  const renderList = recipes?.length > 0 && !error;
  const hasMore =
    recipes?.length > 0 &&
    !isLoading &&
    !error &&
    page < Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <Section>
        <Container>
          <Title>Beer Recipes</Title>
          {renderPreloader && <Loader />}
          {renderList && <RecipesList recipes={visibleRecipes} />}
          <Wrap>
            {renderLoader && <ThreeDotsLoader />}
            {error && <Error />}
            {hasMore && <div ref={loadMoreTriggerRef} />}
            {!hasMore && <End>End of content</End>}
          </Wrap>
        </Container>
      </Section>
    </>
  );
};

export default RecipesPage;
