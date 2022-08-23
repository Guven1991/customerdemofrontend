import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { PrivateRoute } from "./component/PrivateRoute";
import CreateCustomer from "./page/CreateCustomer";
import GetAllCustomers from "./page/GetAllCustomers";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
 
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        
        <Route path="/" element={<PrivateRoute><Home />
          </PrivateRoute>} />
        <Route path="/createCustomer" element={<CreateCustomer />} />
        <Route path="/getAllCustomers" element={<GetAllCustomers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
