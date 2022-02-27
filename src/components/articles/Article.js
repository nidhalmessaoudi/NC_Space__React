function Article(props) {
  return (
    <>
      <img src={props.article.coverImage} alt={props.article.title} />
      <h1>{props.article.title}</h1>
      <em>{props.article.summary}</em>
      <h3>{props.article.body}</h3>
    </>
  );
}

export default Article;
