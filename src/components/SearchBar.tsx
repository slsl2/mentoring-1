import "../styles/SearchBar.css";
import { useEffect, useState } from "react";
import searchIcon1 from "../assets/icons/ic_search_1.png";
import searchIcon2 from "../assets/icons/ic_search_2.png";
import closeIcon from "../assets/icons/ic_close.png";
import { useLocation, useNavigate } from "react-router-dom";

interface SearchBarProps {
  isResultPage?: boolean;
}

function SearchBar({ isResultPage }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";
    setInputValue(query);
  }, [location.search]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      navigate(`/result?query=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className={`search-bar ${isFocused ? "focused" : ""}`}>
      {!isResultPage && (
        <img src={isFocused ? searchIcon2 : searchIcon1} alt="search" />
      )}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search keyword"
      />
      {isResultPage && (
        <img
          className={`close-btn ${inputValue ? "" : "hidden"}`}
          src={closeIcon}
          alt="close"
          onClick={handleClear}
        />
      )}
    </div>
  );
}

export default SearchBar;
