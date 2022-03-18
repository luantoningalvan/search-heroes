import LogoShowcase from "../../../assets/logoShowcase.svg";
import { Search } from "../../../components/Search";
import { Description, Header, Title } from "./styles";

export const ShowcaseHeader = () => {
  return (
    <Header>
      <img src={LogoShowcase} alt="" />
      <Title>Explore o universo</Title>
      <Description>
        Mergulhe no domínio deslumbrante de todos personagens clássicos que você
        ama - e aqueles que você descobrirá em breve
      </Description>

      <Search />
    </Header>
  );
};
