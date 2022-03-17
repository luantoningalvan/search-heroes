import { useCallback } from "react";
import { useFavorites } from "../../contexts/FavoritesContext";
import { Icon } from "../Icon";
import { Button } from "./styles";

interface FavoriteButtonProps {
  id: number;
  size?: "md" | "lg";
}
export const FavoriteButton = ({ id, size }: FavoriteButtonProps) => {
  const { favoriteHero, unfavoriteHero, favoritesList } = useFavorites();

  const handleClick = useCallback(() => {
    if (favoritesList[id]) {
      unfavoriteHero(id);
    } else {
      favoriteHero(id);
    }
  }, [favoritesList, favoriteHero, unfavoriteHero]);

  return (
    <Button size={size} onClick={handleClick}>
      <Icon
        name={favoritesList[id] ? "heart" : "heart-outline"}
        size={size === "lg" ? 36 : 28}
      />
    </Button>
  );
};
