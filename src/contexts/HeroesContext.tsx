import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { api } from "../services/api";
import { useFavorites } from "./FavoritesContext";

export type Character = {
  id: number;
  name: string;
  imageUrl: string;
};

export type Filters = {
  alphabeticalOrder: boolean;
  onlyFavorites: boolean;
  search?: string;
  page: number;
};

type CharactersResponse = {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: Character[];
};

interface HeroesContextData {
  characters: CharactersResponse;
  filters: Filters;
  updateFilters: (filters: Partial<Filters>) => void;
  fetchHeroes: () => void;
  loading: boolean;
}

const HeroesContext = createContext<HeroesContextData>({} as HeroesContextData);

export const HeroesProvider: React.FC = ({ children }) => {
  const query = useQuery();
  const search = query.get("search");
  const { favoritesList } = useFavorites();

  const [characters, setCharacters] = useState<CharactersResponse>({
    count: 0,
    limit: 0,
    offset: 0,
    total: 0,
    results: [],
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    alphabeticalOrder: true,
    onlyFavorites: false,
    search: search || undefined,
    page: 1,
  });

  const fetchHeroes = useCallback(async () => {
    setLoading(true);

    if (filters.onlyFavorites) {
      let favoritesListToArray = Object.values(favoritesList);

      if (!!search) {
        favoritesListToArray = favoritesListToArray.filter((favorite) =>
          favorite.name
            .toLocaleUpperCase()
            .startsWith(filters.search?.toUpperCase() as string)
        );
      }

      if (filters.alphabeticalOrder) {
        favoritesListToArray = favoritesListToArray.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      setCharacters({
        count: favoritesListToArray.length,
        limit: 5,
        offset: 0,
        results: favoritesListToArray,
        total: favoritesListToArray.length,
      });
    } else {
      const orderBy = filters.alphabeticalOrder ? "name" : "modified";
      const fetchHeroes = await api.get("characters", {
        params: {
          orderBy,
          offset: (filters.page - 1) * 20,
          ...(!!search && { nameStartsWith: filters.search }),
        },
      });

      const mapResults = fetchHeroes.data.data.results.map((val: any) => ({
        id: val.id,
        name: val.name,
        imageUrl: `${val.thumbnail.path}/standard_xlarge.${val.thumbnail.extension}`,
      }));

      setCharacters((curr) => ({
        ...fetchHeroes.data.data,
        results:
          filters.page > 1 ? [...curr.results, ...mapResults] : mapResults,
      }));
    }

    setLoading(false);
  }, [filters, favoritesList, search]);

  const updateFilters = useCallback((changedFilters: Partial<Filters>) => {
    setFilters((curr) => ({
      ...curr,
      ...changedFilters,
    }));
  }, []);

  useEffect(() => {
    if (!!search && filters.search !== search) {
      updateFilters({ search });
    }
  }, [search]);

  return (
    <HeroesContext.Provider
      value={{
        characters,
        fetchHeroes,
        loading,
        filters,
        updateFilters,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};

export function useHeroes() {
  const context = useContext(HeroesContext);

  if (!context) {
    throw new Error("useHeroes most be used within an HeroesProvider");
  }

  return context;
}
