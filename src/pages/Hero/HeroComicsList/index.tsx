import { Title, Comic, Grid } from "./styles";

interface HeroComicsListProps {
  comics: any[];
}

export const HeroComicsList = ({ comics }: HeroComicsListProps) => {
  return (
    <>
      <Title>Últimos quadrinhos publicados</Title>
      <Grid>
        {comics.map((comic) => (
          <Comic key={comic.id}>
            <img
              src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
              alt=""
            />
            <h5>{comic.title}</h5>
          </Comic>
        ))}
      </Grid>
    </>
  );
};
