import SearchBar from "../componetns/SearchBar";
import useGetResults from "../apis/sevices/useGetResults";
import { useSearchParams } from "react-router-dom";
import type { DocumentItem } from "../types/results";

function Result() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data, isPending, isError } = useGetResults(query);

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <>
      <header>
        <SearchBar />
      </header>
      <ul>
        {data?.documents.map((doc: DocumentItem) => (
          <li key={doc.id}>
            <img src={doc.faviconUrl} alt="favicon" width={16} />
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              {doc.title}
            </a>{" "}
            {doc.isSaved && <span>⭐</span>}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Result;
