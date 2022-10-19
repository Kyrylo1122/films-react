import FilmsGallery from "./FilmsGallery/FilmsGallery";

export default function Main() {
  return (
    <section className="main">
      <div className="container">
        <h1 className="visually-hidden">Popular films</h1>
        <FilmsGallery />
      </div>
    </section>
  );
}
