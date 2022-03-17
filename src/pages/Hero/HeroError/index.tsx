import { Link } from "react-router-dom";
import { ErrorObject } from "..";
import { Container } from "./styles";

export const HeroError = ({ error }: { error: ErrorObject }) => {
  return (
    <Container>
      <h3>{`😞 Erro ${error.code}`}</h3>
      <p>{error.status}</p>
      <Link to="/">Ir para a página inicial</Link>
    </Container>
  );
};
