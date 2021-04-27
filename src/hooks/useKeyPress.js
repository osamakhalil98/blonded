import { useEffect } from "react";

const useKeyPress = (callback, targetKey, lyricInterval) => {
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      callback();
      //lyricInterval();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
    // eslint-disable-next-line
  }, []);
};

export default useKeyPress;
