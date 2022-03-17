import React, { createContext, useContext, useCallback, useState } from "react";

interface FavoritesContextData {
  unfavoriteHero: (id: number) => void;
  favoriteHero: (id: number) => void;
  favoritesList: { [key: number]: true };
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState<{ [key: number]: true }>(
    () => {
      if (!!localStorage.getItem("favorites")) {
        return JSON.parse(localStorage.getItem("favorites") as string);
      }

      return {};
    }
  );

  const favoriteHero = useCallback(
    (id: number) => {
      if (Object.keys(favoritesList).length < 5) {
        setFavoritesList((curr) => {
          localStorage.setItem(
            "favorites",
            JSON.stringify({ ...curr, [id]: true })
          );
          return { ...curr, [id]: true };
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
