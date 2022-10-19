import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import PopularFilmsGallery from "./Components/Main/PopularFilmsGallery/PopularFilmsGallery";
import Library from "./Components/MyLibrary/Library";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<PopularFilmsGallery />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
