import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/use-on-screen";

const LazyImage = ({ id, src }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useOnScreen(containerRef)

  useEffect(() => {
    if(!isVisible || isLoaded) return
    if (imageRef.current) {
        imageRef.current.onload = () => setIsLoaded(true)
    }
  }, [isVisible, isLoaded]);

  return (
    <div ref={containerRef}>
      {(isVisible || isLoaded) && (<img
        ref={imageRef}
        width="100%"
        height="100%"
        src={src}
        alt={`image-${id}`}
        style={{ objectFit: "cover" }}
      />)}
    </div>
  );
};

export default LazyImage;
