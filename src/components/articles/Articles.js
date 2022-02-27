import { useEffect } from "react";

import Article from "./Article";
import useHttp from "../../hooks/use-http";

function Articles(props) {
  const [send, infos] = useHttp();

  useEffect(() => {
    send({
      url: `${process.env.REACT_APP_API_URL}/articles`,
      method: "GET",
    });
  }, [send]);
  return (
    <>
      {infos.isLoading && <p>Loading...</p>}
      {infos.error && <p>{infos.error}</p>}
      {infos.data &&
        infos.data.articles?.map((article) => (
          <Article key={article._id} article={article} />
        ))}
    </>
  );
}

export default Articles;
