import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logoSingleHero.svg";
import { Search } from "../../../components/Search";
import { Header } from "./styles";

export const HeroHeader = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <Search
        css={{
          maxWidth: 400,

          "> div": {
            height: 48,
          },
          input: {
            height: 48,
          },
        }}
        onSearch={(text) => {
          navigate(!!text ? `/?search=${text}` : "/");
        }}
      />
    </Header>
  );
};
