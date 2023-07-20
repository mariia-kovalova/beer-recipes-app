import { useEffect, useState, useRef } from "react";
import { useRecipesStore } from "../../store/recipesStore";
import {
  selectError,
  selectGet,
  selectIsLoading,
  selectRecipes,
} from "../../store/recepiesSelectors";

import { IRecipe } from "../../shared/types/Recipe.interface";
import { totalItems } from "../../shared/constants/recipesApi";

import { End, Title, Wrap } from "./RecipesPage.styled";
import { Helmet } from "react-helmet-async";
import { Section } from "../../shared/styles/components/Section.styled";
import { Container } from "../../shared/styles/components/Container.styled";
import { RecipesList } from "../../components/RecipesList";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { ThreeDotsLoader } from "../../components/ThreeDotsLoader";

const VISABLE_ITEMS = 15;
const ITEMS_PER_PAGE = 25;

const RecipesPage = () => {
  const [page, setPage] = useState<number>(1);
  const [availableRecipes, setAvailableRecipes] = useState<IRecipe[]>([]);

  const loadMoreTriggerRef = useRef(null);
  const getRecipes = useRecipesStore(selectGet);
  const recipes = useRecipesStore(selectRecipes);
  const isLoading = useRecipesStore(selectIsLoading);
  const error = useRecipesStore(selectError);

  useEffect(() => {
    getRecipes(page);
  }, [getRecipes, page]);

  useEffect(() => {
    setAvailableRecipes((prevRecipes) => [...prevRecipes, ...recipes]);
  }, [recipes]);

  useEffect(() => {
    const handleObserver = (entries: any) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setAvailableRecipes((prevRecipes) => prevRecipes.slice(5));
        const shouldLoadMore = availableRecipes.length <= VISABLE_ITEMS;
        if (shouldLoadMore) setPage((prevPage) => prevPage + 1);
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
  const hasMore = page < Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <Section>
        <Container>
          <Title>Beer Recipes</Title>
          {renderPreloader && <Loader />}
          {renderList && (
            <RecipesList recipes={availableRecipes.slice(0, VISABLE_ITEMS)} />
          )}
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
