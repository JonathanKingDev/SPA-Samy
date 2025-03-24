import { CiSearch } from "react-icons/ci";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import styles from "./search-bar.module.scss";

interface Props {
  placeholder: string;
}

const WAIT_BETWEEN_CHANGE = 600;

export const SearchBar = ({ placeholder }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, WAIT_BETWEEN_CHANGE);

  return (
    <div className={styles.container} role="search">
      <CiSearch className={styles.icon} />
      <input
        onChange={(event) => handleSearch(event.target.value)}
        className={styles.input}
        aria-label="Search"
        type="text"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};
