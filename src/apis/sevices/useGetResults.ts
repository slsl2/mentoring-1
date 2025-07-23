import { useQuery } from "@tanstack/react-query";
import { getResults } from "../api/results";
import type { GetResultsResponse } from "../../types/results";

export const useGetResults = (query: string, from = 0) => {
  return useQuery<GetResultsResponse>({
    queryKey: ["results", query, from],
    queryFn: () => getResults({ query, from }),
    enabled: !!query,
  });
};

export default useGetResults;
