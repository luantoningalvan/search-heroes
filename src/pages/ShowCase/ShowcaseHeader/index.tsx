import { useNavigate } from "react-router-dom";
import LogoShowcase from "../../../assets/logoShowcase.svg";
import { Search } from "../../../components/Search";
import { useHeroes } from "../../../contexts/HeroesContext";
import { Description, Header, Title } from "./styles";

export const ShowcaseHeader = () => {
  const { updateFilters } = useHeroes();
  const navigate = useNavigate();
  return (
    <Header>
      <img src={LogoShowcase} alt="" />
      <Title>Explore o universo</Title>
      <Description>
        Mergulhe no domínio deslumbrante de todos personagens clássicos que você
        ama - e aqueles que você descobrirá em breve
      </Description>

      <Search
        onSearch={(text) => {
          navigate(!!text ? `/?search=${text}` : "/");
          updateFilters({ search: text, page: 1 });
        }}
      />
    </Header>
  );
};
