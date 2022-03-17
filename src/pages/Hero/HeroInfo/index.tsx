import { FavoriteButton } from "../../../components/FavoriteButton";
import { Icon } from "../../../components/Icon";
import { Container, Title, Description, InfoWithIcon, Top } from "./styles";

interface HeroInfoProps {
  info: {
    id: number;
    name: string;
    description: string;
    comics: {
      available: number;
    };
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  lastComicPubDate: Date;
}

export const HeroInfo = ({ info, lastComicPubDate }: HeroInfoProps) => {
  return (
    <Container>
      <Top>
        <Title>{info.name}</Title>
        <FavoriteButton
          hero={{
            id: info.id,
            name: info.name,
            imageUrl: `${info.thumbnail.path}/standard_xlarge.${info.thumbnail.extension}`,
          }}
          size="lg"
        />
      </Top>
      <Description>
        {info.description ||
          "Nenhuma descrição disponível para este personagem"}
      </Description>

      <div style={{ display: "flex", gap: 32 }}>
        <InfoWithIcon>
          <span className="info-title">Quadrinhos</span>
          <div>
            <Icon name="book" size={32} />
            <span>{info.comics.available}</span>
          </div>
        </InfoWithIcon>
        <InfoWithIcon>
          <span className="info-title">Filmes</span>
          <div>
            <Icon name="movie" size={32} />
            <span>Desconhecido</span>
          </div>
        </InfoWithIcon>
      </div>
      <span>
        <strong>Último quadrinho: </strong>
        {Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(lastComicPubDate)}
      </span>
    </Container>
  );
};
