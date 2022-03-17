import { Icon } from "../../../components/Icon";
import { useHeroes } from "../../../contexts/HeroesContext";
import {
  AlphabeticalOrderFilter,
  Bar,
  OnlyFavoritesFilter,
  Results,
  ToggleSwitch,
} from "./styles";

export const ShowcaseFilters = () => {
  const { updateFilters, filters, characters } = useHeroes();

  return (
    <Bar>
      <Results>Encontrados {characters.total} personagens</Results>
      <div>
        <AlphabeticalOrderFilter>
          <Icon name="hero" size={32} />
          <span>Ordenar por nome - A/Z</span>
          <ToggleSwitch
            checked={filters.alphabeticalOrder}
            onChange={(e) =>
              updateFilters({ alphabeticalOrder: e.target.checked })
            }
            type="checkbox"
          />
        </AlphabeticalOrderFilter>

        <OnlyFavoritesFilter
          active={filters.onlyFavorites}
          onClick={() =>
            updateFilters({ onlyFavorites: !filters.onlyFavorites })
          }
        >
          <Icon name="heart" size={28} />
          Somente favoritos
        </OnlyFavoritesFilter>
      </div>
    </Bar>
  );
};
