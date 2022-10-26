import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Btn.css";
import Layout from "./Components/Layout/Layout";
import Main from "./Components/Main/Main";
import Library from "./Components/MyLibrary/Library";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
