import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Shops from "./components/Shops/Shops";
import Samsung from "./components/Samsung/Samsung";
import Apple from "./components/Apple/Apple";
import Corporate from "./components/Corporate/Corporate";
import Campaigns from "./components/Campaigns/Campaigns";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import OutletBtn from "./components/OutletBtn/OutletBtn";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/campaigns" element={<Campaigns/>} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/samsung" element={<Samsung />} />
          <Route path="/apple" element={<Apple/>} />
          <Route path="/outlet" element={<OutletBtn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
