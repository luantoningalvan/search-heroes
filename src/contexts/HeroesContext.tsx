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

export type Character = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type Filters = {
  alphabeticalOrder: boolean;
  onlyFavorites: boolean;
  search?: string;
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
  });

  const fetchHeroes = useCallback(async () => {
    setLoading(true);
    const orderBy = filters.alphabeticalOrder ? "name" : "modified";
    const fetchHeroes = await api.get("characters", {
      params: {
        orderBy,
        ...(!!search && { nameStartsWith: filters.search }),
      },
    });
    setCharacters(fetchHeroes.data.data);
    setLoading(false);
  }, [filters, search]);

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
