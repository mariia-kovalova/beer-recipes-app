import { useEffect, useState, useRef } from "react";
import { useRecipesStore } from "../../store/recipesStore";
import {
  selectError,
  selectGetAll,
  selectIsLoading,
  selectRecipes,
} from "../../store/recepiesSelectors";

import { totalItems } from "../../shared/constants/recipesApi";

import { End, Title, Wrap } from "./RecipesPage.styled";
import { Helmet } from "react-helmet-async";
import { Section } from "../../shared/styles/components/Section.styled";
import { Container } from "../../shared/styles/components/Container.styled";
import { RecipesList } from "../../components/RecipesList";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { ThreeDotsLoader } from "../../components/ThreeDotsLoader";

const RecipesPage = () => {
  const [page, setPage] = useState(1);
  const trigger = useRef(null);
  const getAllRecipes = useRecipesStore(selectGetAll);
  const recipes = useRecipesStore(selectRecipes);
  const isLoading = useRecipesStore(selectIsLoading);
  const error = useRecipesStore(selectError);

  useEffect(() => {
    getAllRecipes(page);
  }, [getAllRecipes, page]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (trigger.current) observer.observe(trigger.current);

    function handleObserver(entries: any) {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  });

  const renderPreloader = recipes.length === 0 && isLoading;
  const renderLoader = recipes.length > 0 && isLoading;
  const renderList = recipes.length > 0 && !error;
  const renderError = !isLoading && error;
  const hasMore = page < Math.ceil(totalItems / 25);
  const renderTriger = recipes.length > 0 && !isLoading && !error && hasMore;
  const renderEnd = recipes.length > 0 && !isLoading && !error && !hasMore;

  return (
    <>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <Section>
        <Container>
          <Title>Beer Recipes</Title>
          {renderPreloader && <Loader />}
          {renderList && <RecipesList recipes={recipes} />}
          {renderTriger && <div ref={trigger} />}
          {renderError && <Error />}
          {renderEnd && <End>End of content</End>}
          <Wrap>{renderLoader && <ThreeDotsLoader />}</Wrap>
        </Container>
      </Section>
    </>
  );
};

export default RecipesPage;
