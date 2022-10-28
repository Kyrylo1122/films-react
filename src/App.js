import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Btn.css";
import Layout from "./Components/Layout/Layout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";

const Main = lazy(() => import("./Components/Main/Main"));
const Library = lazy(() => import("./Components/MyLibrary/Library"));

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />

          <Route path="main" element={<Main />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
