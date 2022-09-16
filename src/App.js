import { Route, Routes } from "react-router-dom";
import Budgeting from "./components/Budgeting";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Budgeting />} />
    </Routes>
  );
}
