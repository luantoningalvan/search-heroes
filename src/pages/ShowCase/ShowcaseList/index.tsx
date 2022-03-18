import { useCallback, useEffect, useRef } from "react";
import { HeroCard, HeroCardLoading } from "../../../components/HeroCard";
import { ListGrid } from "./styles";
import { useHeroes } from "../../../contexts/HeroesContext";
import { EmptyState } from "../EmptyState";

export const ShowcaseList = () => {
  const { fetchHeroes, characters, loading, filters, updateFilters } =
    useHeroes();
  const observer = useRef<any>();

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      console.log(loading);
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          characters.results.length < characters.total
        ) {
          updateFilters({ page: filters.page + 1 });
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, characters, filters]
  );

  useEffect(() => {
    fetchHeroes();
  }, [filters]);

  return (
    <>
      {!loading && characters.total === 0 ? (
        <EmptyState />
      ) : (
        <ListGrid>
          {characters.results.map((hero, index) => (
            <HeroCard
              ref={
                index === characters.results.length - 1
                  ? lastBookElementRef
                  : null
              }
              key={hero.id}
              hero={hero}
            />
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
