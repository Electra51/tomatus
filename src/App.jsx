import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";


const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
