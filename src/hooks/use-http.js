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
        url: options.url,
        method: options.method,
        data: options.body || undefined,
      });

      setData(res.data.data);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, []);

  return [send, { isLoading, error, data }];
}

export default useHttp;
