import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Menu } from "pages/Menu";

function App() {
  return (
    <Routes>
      <Route path="/menu" element={<Menu />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
