import type { DocumentItem } from "../types/results";
import defaultThumb from "../assets/images/default_thumb.png";
import defaultFavi from "../assets/images/default_favi.png";

interface ResultListProps {
  documents: DocumentItem[];
}

function ResultList({ documents }: ResultListProps) {
  return (
    <ul>
      {documents.map((doc) => (
        <a href={doc.url} target="_blank" rel="noopener noreferrer">
          <li className="result-item" key={doc.id}>
            <div className="item-thumb">
              <img
                src={doc.imageUrl || defaultThumb}
                alt="thumbnail"
                onError={(e) => {
                  e.currentTarget.src = defaultThumb;
                }}
              />
            </div>
            <div className="item-right">
              <p>{doc.title}</p>
              <div className="item-url">
                <div className="item-favi">
                  <img
                    src={doc.faviconUrl || defaultFavi}
                    alt="favicon"
                    onError={(e) => {
                      e.currentTarget.src = defaultFavi;
                    }}
                  />
                </div>
                <p>{doc.url}</p>
              </div>
            </div>
            {doc.isSaved && <span>ㅎ</span>}
          </li>
        </a>
      ))}
    </ul>
  );
}

export default ResultList;
