import notFound from "../../../assets/notFound.svg";
import { Container } from "./styles";

export const EmptyState = () => {
  return (
    <Container>
      <img
        src={notFound}
        alt="Em cima de uma cadeira está um homem com medo de um rato e no chão está o rato olhando o homem sem entender nada."
        height={200}
      />
      <h3>Salve-se quem puder!</h3>
      <p>Não encontramos nenhum herói correspondente a pesquisa</p>
    </Container>
  );
};
