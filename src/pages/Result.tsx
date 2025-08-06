import "../styles/Result.css";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useGetResults from "../apis/sevices/useGetResults";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { DocumentItem } from "../types/results";
import useBottomIntersection from "../hooks/useBottomIntersection";
import ErrorModal from "../components/ErrorModal";
import { useEffect, useState } from "react";
import SkeletonList from "../components/SkeletonList";
import iconBack from "../assets/icons/ic_arrow back.png";

function Result() {
  const [showError, setShowError] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
  } = useGetResults(query);

  const { bottom } = useBottomIntersection({
    onIntersect: () => {
      if (hasNextPage) fetchNextPage();
    },
  });

  useEffect(() => {
    if (isError) setShowError(true);
  }, [isError]);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const documents: DocumentItem[] =
    data?.pages.flatMap((page) => page.documents) ?? [];

  return (
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="header-in">
          <img
            className="back-btn"
            src={iconBack}
            alt="back"
            onClick={handleGoBack}
          />

          <SearchBar isResultPage={true} />
        </div>
      </header>{" "}
      {showError && <ErrorModal onClose={() => setShowError(false)} />}
      <div className="result-container">
        {isPending ? (
          <SkeletonList count={10} />
        ) : (
          <>
            <ResultList documents={documents} />
            <div ref={bottom} style={{ height: 1 }} />
            {isFetchingNextPage && <div>...</div>}
          </>
        )}
      </div>
    </>
  );
}

export default Result;
