import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import StoreList from "./components/StoreList";
import CreateStore from "./components/CreateStore";
import Search from "./components/Search";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/StoreList/:id" element={<StoreList />} />
          <Route path="/CreateStore" element={<CreateStore />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
