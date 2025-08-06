import { useMutation } from "@tanstack/react-query";
import { addBookmark, deleteBookmark } from "../api/bookmark";

export const useBookmark = (
  onToggle?: (docId: string, isSaved: boolean) => void,
  onError?: () => void
) => {
  const addMutation = useMutation({
    mutationFn: addBookmark,
    // onSuccess: (_, docId) => {
    //   onToggle?.(docId, true);
    // },
    onMutate: async (docId) => {
      onToggle?.(docId, true);
    },
    onError: (error, docId) => {
      onToggle?.(docId, false);
      onError?.();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBookmark,
    onMutate: async (docId) => {
      onToggle?.(docId, false);
    },
    onError: (error, docId) => {
      onToggle?.(docId, true);
      onError?.();
    },
  });

  const toggleBookmark = (docId: string, isSaved: boolean) => {
    if (isSaved) deleteMutation.mutate(docId);
    else addMutation.mutate(docId);
  };

  return {
    toggleBookmark,
    isAdding: addMutation.isPending,
    isRemoving: deleteMutation.isPending,
  };
};
