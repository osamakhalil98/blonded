import { useEffect } from 'react';

const useKeyPress = (callback, targetKey) => {
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
    // eslint-disable-next-line
  }, []);
};

export default useKeyPress;
