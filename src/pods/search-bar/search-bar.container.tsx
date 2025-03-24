import { SearchBar } from "./search-bar.component";

interface Props {
  placeholder: string;
}

export const SearchBarContainer = ({ placeholder }: Props) => {
  return <SearchBar placeholder={placeholder} />;
};
