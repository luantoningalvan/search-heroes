import { useCallback } from "react";
import {
  FavoriteHeroInfo,
  useFavorites,
} from "../../contexts/FavoritesContext";
import { Icon } from "../Icon";
import { Button } from "./styles";

interface FavoriteButtonProps {
  hero: FavoriteHeroInfo;
  size?: "md" | "lg";
}
export const FavoriteButton = ({ hero, size }: FavoriteButtonProps) => {
  const { favoriteHero, unfavoriteHero, favoritesList } = useFavorites();

  const handleClick = useCallback(() => {
    if (favoritesList[hero.id]) {
      unfavoriteHero(hero.id);
    } else {
      favoriteHero(hero);
    }
  }, [favoritesList, favoriteHero, unfavoriteHero]);

  return (
    <Button size={size} onClick={handleClick}>
      <Icon
        name={favoritesList[hero.id] ? "heart" : "heart-outline"}
        size={size === "lg" ? 36 : 28}
      />
    </Button>
  );
};
