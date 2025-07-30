import { useInfiniteQuery } from "@tanstack/react-query";
import { getResults } from "../api/results";
import type { GetResultsResponse } from "../../types/results";

export const useGetResults = (query: string, size = 20) => {
  return useInfiniteQuery<GetResultsResponse>({
    queryKey: ["resultsInfinite", query],
    queryFn: ({ pageParam = 0 }) =>
      getResults({ query, from: pageParam as number, size }),
    initialPageParam: 0,
    enabled: !!query,
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.reduce(
        (sum, page) => sum + page.documents.length,
        0
      );
      return lastPage.documents.length > 0 ? totalLoaded : undefined;
    },
  });
};

export default useGetResults;
