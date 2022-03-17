import { Circle, Container } from "./styles";

export const Loader = (props?: any) => {
  return (
    <Container>
      <Circle />
      <span>Carregando</span>
    </Container>
  );
};
