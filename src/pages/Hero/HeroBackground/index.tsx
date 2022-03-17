import { Container, Image } from "./styles";

interface HeroBackgroundProps {
  info: any;
}

export const HeroBackground = ({ info }: HeroBackgroundProps) => {
  return (
    <Container>
      <Image
        src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
        alt=""
      />
    </Container>
  );
};
