
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import CreateCustomer from './page/CreateCustomer';
import GetAllCustomers from './page/GetAllCustomers';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';

function App() {
  
  return (
    <div className="App">
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>} />                                           
      <Route path="/CreateCustomer" element={<CreateCustomer/>} />
      <Route path="/GetAllCustomers" element={<GetAllCustomers/>} />
      <Route path="/Login" element={<Login/>} />      
      <Route path="/Register" element={<Register/>} />    
    </Routes>
    </div>
  );
}

export default App;
