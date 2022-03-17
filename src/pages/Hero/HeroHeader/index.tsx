import { Link } from "react-router-dom";
import Logo from "../../../assets/logoSingleHero.svg";
import { Header, CustomSearch } from "./styles";

export const HeroHeader = () => {
  return (
    <Header>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <CustomSearch />
    </Header>
  );
};
