import "./Titles.css";
export function PopularFilmsTitle() {
  return <h1 className="title">What is popular right now:</h1>;
}

export function SearchedFilmsTitle({ query }) {
  return (
    <h1 className="title">
      You are searching: <span>{query}</span>
    </h1>
  );
}
