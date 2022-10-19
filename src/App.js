import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Main from "./Components/Main/Main";
import Library from "./Components/MyLibrary/Library";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<Main />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
      <Main />
    </div>
  );
}

export default App;
