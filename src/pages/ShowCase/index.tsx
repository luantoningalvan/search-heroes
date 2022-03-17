import { Layout } from "../../components/Layout";
import { HeroesProvider } from "../../contexts/HeroesContext";
import { ShowcaseHeader } from "./ShowcaseHeader";

export const ShowcasePage = () => {
  return (
    <HeroesProvider>
      <Layout>
        <ShowcaseHeader />
      </Layout>
    </HeroesProvider>
  );
};
