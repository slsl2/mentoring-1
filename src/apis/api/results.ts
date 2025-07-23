import axios from "axios";
import type { GetResultsParams, GetResultsResponse } from "../../types/results";

export const getResults = async ({
  query,
  size = 20,
  from = 0,
}: GetResultsParams): Promise<GetResultsResponse> => {
  const res = await axios.get(
    "https://frontend.assignment.getliner.com/search/documents",
    {
      params: { query, size, from },
    }
  );
  return res.data;
};
