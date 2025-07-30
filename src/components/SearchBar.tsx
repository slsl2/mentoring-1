import { useState } from "react";
import searchIcon1 from "../assets/icons/ic_search_1.png";
import searchIcon2 from "../assets/icons/ic_search_2.png";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      navigate(`/result?query=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  return (
    <div className={`search-bar ${isFocused ? "focused" : ""}`}>
      <img src={isFocused ? searchIcon2 : searchIcon1} alt="검색 아이콘" />
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search keyword"
      />
    </div>
  );
}

export default SearchBar;
