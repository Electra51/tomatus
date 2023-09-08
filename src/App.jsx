import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";

import Dashboard from "./Pages/DashBoard/Dashboard";
import Navbar from "./Components/Shared/Navbar/Navbar";
import MenuLayout1 from "./Pages/MenuLayout1/MenuLayout1";

const App = () => {
  return (
    <RootLayout>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/orderList" element={<>hi</>} />
        <Route path="/stroage" element={<>ji</>} />
        <Route path="/settings" element={<>ji</>} />
        <Route path="/menuLayout/:bID" element={<MenuLayout1/>} />
        <Route path="/analytics/:aID" element={<>jii</>} />
      </Routes>
    </RootLayout>
  );
};

export default App;