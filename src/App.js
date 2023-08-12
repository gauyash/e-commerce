import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import MainLayout from "./Components/MainLayout";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";
import { AppProvider } from "./context";

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="category/:id" element={<Category />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
