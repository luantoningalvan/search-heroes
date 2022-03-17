import { memo } from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton";
import { HeroImage, HeroInfo, SkeletonContainer } from "./styles";

interface HeroCardProps {
  hero: {
    id: number;
    name: string;
    imageUrl: string;
  };
}

export const HeroCard = memo(({ hero }: HeroCardProps) => {
  return (
    <div>
      <Link to={`/hero/${hero.id}`}>
        <HeroImage loading="lazy" src={hero.imageUrl} alt={hero.name} />
      </Link>
      <HeroInfo>
        <h4>{hero.name}</h4>
        <FavoriteButton hero={hero} />
      </HeroInfo>
    </div>
  );
});

export const HeroCardLoading = memo(() => (
  <SkeletonContainer>
    <div className="skeleton-box cover">
      <div className="skeleton-box"></div>
    </div>
    <div className="skeleton-box text-line"></div>
  </SkeletonContainer>
));
