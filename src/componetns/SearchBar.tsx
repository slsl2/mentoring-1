import { useState } from "react";
import searchIcon1 from "../assets/icons/ic_search_1.png";
import searchIcon2 from "../assets/icons/ic_search_2.png";

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`search-bar ${isFocused ? "focused" : ""}`}>
      <img src={isFocused ? searchIcon2 : searchIcon1} alt="검색 아이콘" />
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search keyword"
      />
    </div>
  );
}

export default SearchBar;
