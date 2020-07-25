import { useState, useEffect } from 'react';

const useGetData = (API) => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setGetData(data))
      .catch((error) => error);
  }, []);
  return getData;
};

export default useGetData;
