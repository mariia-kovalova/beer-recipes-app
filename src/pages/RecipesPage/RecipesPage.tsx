import { useEffect, useState, useRef, useMemo } from "react";
import { useRecipesStore } from "../../store/recipesStore";
import {
  selectError,
  selectGet,
  selectIsLoading,
  selectRecipes,
  selectReduceRecipes,
  selectSelected,
} from "../../store/recepiesSelectors";

import {
  itemsPerPage,
  step,
  totalItems,
  visibleItems,
} from "../../shared/constants/recipesApi";

import { End, Title, Wrap } from "./RecipesPage.styled";
import { Helmet } from "react-helmet-async";
import { Section } from "../../shared/styles/components/Section.styled";
import { Container } from "../../shared/styles/components/Container.styled";
import { RecipesList } from "../../components/RecipesList";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { ThreeDotsLoader } from "../../components/ThreeDotsLoader";
import { DeleteButton } from "../../components/DeleteButton";

const RecipesPage = () => {
  const [page, setPage] = useState<number>(1);

  const loadMoreTriggerRef = useRef(null);

  const getRecipes = useRecipesStore(selectGet);
  const reduceRecipes = useRecipesStore(selectReduceRecipes);
  const recipes = useRecipesStore(selectRecipes);
  const selectedRecipesIds = useRecipesStore(selectSelected);
  const isLoading = useRecipesStore(selectIsLoading);
  const error = useRecipesStore(selectError);

  const visibleRecipes = useMemo(
    () => recipes.slice(0, visibleItems),
    [recipes]
  );

  const ableLoadMore = useMemo(
    () =>
      recipes?.length > 0 &&
      !isLoading &&
      !error &&
      page < Math.ceil(totalItems / itemsPerPage),
    [error, isLoading, page, recipes.length]
  );

  useEffect(() => {
    getRecipes(page);
  }, [getRecipes, page]);

  useEffect(() => {
    if (recipes.length <= visibleItems && ableLoadMore)
      setPage((prevPage) => prevPage + 1);
  }, [ableLoadMore, recipes.length]);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && selectedRecipesIds.length === 0) {
        reduceRecipes(step);
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
  const renderEnd =
    recipes.length === visibleItems &&
    page >= Math.ceil(totalItems / itemsPerPage);
  const renderDeleteButton = selectedRecipesIds?.length > 0;

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
            {ableLoadMore && <div ref={loadMoreTriggerRef} />}
            {renderEnd && <End>End of content</End>}
          </Wrap>

          {renderDeleteButton && <DeleteButton />}
        </Container>
      </Section>
    </>
  );
};

export default RecipesPage;
