import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BicyclesPage from "./pages/BicyclesPage/BicyclesPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BicyclesPage />} />
          <Route path="*" element={<BicyclesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
