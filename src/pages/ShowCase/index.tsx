import { Layout } from "../../components/Layout";
import { HeroesProvider } from "../../contexts/HeroesContext";
import { ShowcaseHeader } from "./ShowcaseHeader";
import { ShowcaseList } from "./ShowcaseList";

export const ShowcasePage = () => {
  return (
    <HeroesProvider>
      <Layout>
        <ShowcaseHeader />
        <ShowcaseList />
      </Layout>
    </HeroesProvider>
  );
};
