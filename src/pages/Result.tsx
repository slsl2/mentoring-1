import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useGetResults from "../apis/sevices/useGetResults";
import { useSearchParams } from "react-router-dom";
import type { DocumentItem } from "../types/results";
import useBottomIntersection from "../hooks/useBottomIntersection";
import ErrorModal from "../components/ErrorModal";
import { useEffect, useState } from "react";
import SkeletonList from "../components/SkeletonList";
import "../styles/Result.css";

function Result() {
  const [showError, setShowError] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

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

  if (isPending) return <SkeletonList count={10} />;

  const documents: DocumentItem[] =
    data?.pages.flatMap((page) => page.documents) ?? [];

  return (
    <>
      <header>
        <SearchBar />
      </header>
      {showError && <ErrorModal onClose={() => setShowError(false)} />}
      <ResultList documents={documents} />
      <div ref={bottom} style={{ height: 1 }} />
      {isFetchingNextPage && <div>...</div>}
    </>
  );
}

export default Result;
