import { useEffect, useRef } from "react";

export default function useOutsideClick(callback) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      }
      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [callback]
  );

  return ref;
}
