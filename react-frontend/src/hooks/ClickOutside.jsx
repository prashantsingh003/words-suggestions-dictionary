import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref,onClickOutside,onClickInside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
				onClickOutside();
      }
			else{
				onClickInside()
			}
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      //clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export function ClickOutside({children,onClickOutside=()=>{},onClickInside=()=>{}}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,onClickOutside,onClickInside);

  return <div ref={wrapperRef}>{children}</div>;
}