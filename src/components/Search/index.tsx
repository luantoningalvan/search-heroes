import { useCallback, useState } from "react";
import { Icon } from "../Icon";
import { SearchBox, SearchIcon, SearchInput } from "./styles";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

export const Search = (props?: any) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const query = useQuery();
  const search = query.get("search");

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        navigate(`/?search=${text}`);
      }
    },
    [text]
  );

  return (
    <SearchBox {...props}>
      <SearchIcon>
        <Icon name="search" size={32} />
      </SearchIcon>
      <SearchInput
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyPress}
        type="search"
        placeholder="Procure por heróis"
        defaultValue={search || undefined}
      />
    </SearchBox>
  );
};
