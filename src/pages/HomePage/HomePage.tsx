import { Helmet } from "react-helmet-async";
import { Section } from "../../shared/styles/components/Section.styled";
import { Container } from "../../shared/styles/components/Container.styled";
import { Title } from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Beer Recipes App</title>
      </Helmet>
      <Section>
        <Container>
          <Title>Welcome to Beer Recipes App</Title>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
