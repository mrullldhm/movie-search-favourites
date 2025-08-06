import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}
