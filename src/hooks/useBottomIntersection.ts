import { useCallback, useRef } from "react";
import useIntersection from "./useIntersection";

interface IntersectionObserverProps {
  onIntersect: () => void;
}

interface Return {
  bottom: React.RefObject<HTMLDivElement>;
}

const useBottomIntersection = ({
  onIntersect,
}: IntersectionObserverProps): Return => {
  const bottom = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        onIntersect();
      }
    },
    [onIntersect]
  );

  useIntersection({
    target: bottom,
    onIntersect: handleIntersect,
  });

  return { bottom };
};

export default useBottomIntersection;
