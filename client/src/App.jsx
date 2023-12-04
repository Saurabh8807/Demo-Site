import Sidebar from "./components/sidebar.component";
import CustomerSupport from "./components/customer-support.component";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.page";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route index element={<Homepage />}></Route>
      </Routes>
      <CustomerSupport />
    </div>
  );
};

export default App;
