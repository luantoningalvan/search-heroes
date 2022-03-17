import { useEffect } from "react";
import { HeroCard, HeroCardLoading } from "../../../components/HeroCard";
import { ListGrid } from "./styles";
import { useHeroes } from "../../../contexts/HeroesContext";
import { EmptyState } from "../EmptyState";

export const ShowcaseList = () => {
  const { fetchHeroes, characters, loading, filters } = useHeroes();

  useEffect(() => {
    fetchHeroes();
  }, [filters]);

  console.log(characters);

  return (
    <>
      {!loading && characters.total === 0 ? (
        <EmptyState />
      ) : (
        <ListGrid>
          {characters.results.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </ListGrid>
      )}

      <ListGrid>
        {loading &&
          Array(4)
            .fill(1)
            .map((_, index) => <HeroCardLoading key={`loader-${index + 1}`} />)}
      </ListGrid>
    </>
  );
};
