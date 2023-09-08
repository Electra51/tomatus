import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";

import Dashboard from "./Pages/DashBoard/Dashboard";
import Navbar from "./Components/Shared/Navbar/Navbar";

const App = () => {
  return (
    <RootLayout>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/orderList" element={<>hi</>} />
        <Route path="/stroage" element={<>ji</>} />
        <Route path="/settings" element={<>ji</>} />
        <Route path="/build/:bID" element={<>ki</>} />
        <Route path="/analytics/:aID" element={<>jii</>} />
      </Routes>
    </RootLayout>
  );
};

export default App;