import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Menu } from "pages/Menu";
import { LightSwitch } from "components/LightSwitch";

function App() {
  return (
    <>
      <LightSwitch />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
