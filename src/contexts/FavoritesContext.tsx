import React, { createContext, useContext, useCallback, useState } from "react";

export type FavoriteHeroInfo = {
  id: number;
  imageUrl: string;
  name: string;
};
interface FavoritesContextData {
  unfavoriteHero: (id: number) => void;
  favoriteHero: (hero: FavoriteHeroInfo) => void;
  favoritesList: { [key: number]: FavoriteHeroInfo };
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState<{
    [key: number]: FavoriteHeroInfo;
  }>(() => {
    if (!!localStorage.getItem("favorites")) {
      return JSON.parse(localStorage.getItem("favorites") as string);
    }

    return {};
  });

  const favoriteHero = useCallback(
    (hero: FavoriteHeroInfo) => {
      if (Object.keys(favoritesList).length < 5) {
        setFavoritesList((curr) => {
          localStorage.setItem(
            "favorites",
            JSON.stringify({ ...curr, [hero.id]: hero })
          );
          return { ...curr, [hero.id]: hero };
        });
      }
    },
    [setFavoritesList, favoritesList]
  );

  const unfavoriteHero = useCallback(
    (id: number) => {
      setFavoritesList((curr) => {
        const newState = curr;
        delete newState[id];

        localStorage.setItem("favorites", JSON.stringify(newState));
        return { ...newState };
      });
    },
    [setFavoritesList]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favoritesList,
        favoriteHero,
        unfavoriteHero,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites most be used within an HeroesProvider");
  }

  return context;
}
