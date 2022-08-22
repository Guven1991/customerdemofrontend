
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import CreateCustomer from './page/CreateCustomer';
import GetAllCustomers from './page/GetAllCustomers';
import Home from './page/Home';

function App() {
  
  return (
    <div className="App">
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>} />                                           
      <Route path="/CreateCustomer" element={<CreateCustomer/>} />
      <Route path="/GetAllCustomers" element={<GetAllCustomers/>} />       
    </Routes>
    </div>
  );
}

export default App;
