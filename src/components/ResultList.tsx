import type { DocumentItem } from "../types/results";
import defaultThumb from "../assets/images/default_thumb.png";
import defaultFavi from "../assets/images/default_favi.png";
import icUnsaved from "../assets/icons/ic_save_1.png";
import icSaved from "../assets/icons/ic_save_2.png";
import { useBookmark } from "../apis/sevices/useBookmark";
import { useState } from "react";
import ErrorModal from "./ErrorModal";

interface ResultListProps {
  documents: DocumentItem[];
}

function ResultList({ documents }: ResultListProps) {
  const [bookmarkStatus, setBookmarkStatus] = useState<Record<string, boolean>>(
    {}
  );
  const [showError, setShowError] = useState(false);

  const { toggleBookmark } = useBookmark(
    (docId, isSaved) => {
      setBookmarkStatus((prev) => ({ ...prev, [docId]: isSaved }));
    },
    () => setShowError(true)
  );

  const mergedDocuments = documents.map((doc) => ({
    ...doc,
    isSaved: bookmarkStatus[doc.id] ?? doc.isSaved,
  }));

  return (
    <>
      {showError && <ErrorModal onClose={() => setShowError(false)} />}
      <ul>
        {mergedDocuments.map((doc) => (
          <li className="result-item" key={doc.id}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              <div className="item-thumb">
                <img
                  src={doc.imageUrl || defaultThumb}
                  alt="thumbnail"
                  onError={(e) => {
                    e.currentTarget.src = defaultThumb;
                  }}
                />
              </div>
              <div className="item-description">
                <h4 className="item-title">{doc.title}</h4>
                <div className="item-domain">
                  <div className="item-favi">
                    <img
                      src={doc.faviconUrl || defaultFavi}
                      alt="favicon"
                      onError={(e) => {
                        e.currentTarget.src = defaultFavi;
                      }}
                    />
                  </div>
                  <p className="item-netloc">{doc.netloc}</p>
                </div>
              </div>
            </a>
            <div className="item-save">
              <img
                className="save-icon"
                onClick={() => toggleBookmark(doc.id, doc.isSaved)}
                src={doc.isSaved ? icSaved : icUnsaved}
                alt={doc.isSaved ? "saved" : "unsaved"}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResultList;
