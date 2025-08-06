import axios from "axios";

export const addBookmark = async (documentId: string) => {
  const res = await axios.post(
    `https://frontend.assignment.getliner.com/collection/document/${documentId}`
  );
  return res.data;
};

export const deleteBookmark = async (documentId: string) => {
  const res = await axios.delete(
    `https://frontend.assignment.getliner.com/collection/document/${documentId}`
  );
  return res.data;
};
