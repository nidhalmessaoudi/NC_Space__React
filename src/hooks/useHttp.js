import axios from "axios";
import { useCallback, useState } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const send = useCallback(async (options) => {
    try {
      setIsLoading(true);
      const res = await axios({
        url: `${process.env.REACT_APP_API_URL}${options.path}`,
        method: options.method,
        data: options.body || undefined,
      });

      console.log(res);

      setData(res.data.data);
    } catch (err) {
      if (err.response.status) {
        setError(err.response.data);
      } else {
        setError(err);
      }
    }
    setIsLoading(false);
  }, []);

  return [send, { isLoading, error, data }];
}

export default useHttp;
