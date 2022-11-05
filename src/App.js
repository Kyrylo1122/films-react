import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Css/Btn.css";
import "./Css/Title.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import { HeaderNavNames } from "./Components/Header/HeaderNavNames";
import Library from "./Components/MyLibrary/Library";
import Search from "./Components/Search/Search";
import Popular from "./Components/Popular/Popular";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Popular />} />
          <Route path={`${HeaderNavNames.POPULAR}`} element={<Popular />} />
          <Route path={`${HeaderNavNames.SEARCH}`} element={<Search />} />
          <Route path={`${HeaderNavNames.LIBRARY}`} element={<Library />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
