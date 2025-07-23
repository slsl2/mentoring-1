// src/types/results.d.ts

export interface DocumentItem {
  id: string;
  faviconUrl: string;
  imageUrl: string;
  title: string;
  url: string;
  netloc: string;
  isSaved: boolean;
}

export interface GetResultsResponse {
  documents: DocumentItem[];
  isLast: boolean;
}

export interface GetResultsParams {
  query: string;
  size?: number;
  from?: number;
}
