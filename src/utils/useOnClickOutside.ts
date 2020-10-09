import { useEffect, useRef } from "react";

export const useOnClickOutside = <TRef extends HTMLElement>(
  handler: (e: Event) => any
) => {
  const ref = useRef<TRef>(null);

  useEffect(() => {
    const observer = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", observer);
    document.addEventListener("touchstart", observer);
    return () => {
      document.removeEventListener("mousedown", observer);
      document.removeEventListener("touchstart", observer);
    };
  }, [ref, handler]);

  return ref;
};
