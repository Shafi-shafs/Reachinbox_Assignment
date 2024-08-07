import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/signin";
import Register from "./pages/Register";
import OneBox from "./pages/OneBox";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OneBox />} />
          <Route path="/onebox" element={<OneBox />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
