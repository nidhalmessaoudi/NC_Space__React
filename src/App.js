import { useEffect } from "react";
import Article from "./components/Article";
import useHttp from "./hooks/use-http";

function App() {
  const [send, infos] = useHttp();

  useEffect(() => {
    send({
      url: `${process.env.REACT_APP_API_URL}/articles`,
      method: "GET",
    });
  }, [send]);

  return (
    <>
      <h1>Hello from NC Space!</h1>
      {infos.isLoading && <p>Loading...</p>}
      {infos.error && <p>{infos.error}</p>}
      {infos.data &&
        infos.data.articles?.map((article) => (
          <Article key={article._id} article={article} />
        ))}
    </>
  );
}

export default App;
