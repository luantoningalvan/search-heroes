import { useCallback, useState } from "react";
import { Icon } from "../Icon";
import { SearchBox, SearchIcon, SearchInput } from "./styles";
import { useQuery } from "../../hooks/useQuery";

export interface SearchProps {
  onSearch?: (text: string) => void;
  [key: string]: unknown;
}
export const Search = (props: SearchProps) => {
  const [text, setText] = useState("");
  const query = useQuery();
  const search = query.get("search");

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        typeof props.onSearch === "function" && props.onSearch(text);
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
