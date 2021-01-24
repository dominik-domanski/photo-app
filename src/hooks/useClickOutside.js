import React from "react";

export function useOutsideClick(elemRef, callback) {
  const callbackRef = React.useRef();
  callbackRef.current = callback;

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!elemRef?.current?.contains(event.target) && callbackRef.current) {
        callbackRef.current(event);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [callbackRef, elemRef]);
}
