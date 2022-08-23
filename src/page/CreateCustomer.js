import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { errorNote, successNote } from "../CostumToastify";

function CreateCustomer() {


    const [name, setName] = useState("");
    const [surname, setSurName] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");
  
  
  
    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeSurname = (e) => setSurName(e.target.value);
    const handleChangeLocation = (e) => setLocation(e.target.value);
  
    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        const data = {
          name: name,
          surname: surname,
          location:location
        
        };
        const token = localStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` }
      }      
         axios.post("http://localhost:8080/customer/add-customer", data,config)
          .then((res) => successNote("Kullanıcı eklendi")).catch((err) => {
            console.log(err)
            errorNote(err.response.data.message);
          });         
      };

    return(
        <div style={{marginTop:"100px"}}>
      <Form
        className="w-50 mx-auto border bordered p-5 shadow-lg"
        onSubmit={handleOnSubmit}
      >
        {error && <div className="alert alert-danger">{error}</div>}
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            onChange={handleChangeName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Surname">Surname</Label>
          <Input
            id="Surname"
            name="Surname"
            placeholder="Surname"
            type="text"
            onChange={handleChangeSurname}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Location">Location</Label>
          <Input
            id="Location"
            name="Location"
            placeholder="Location"
            type="text"
            onChange={handleChangeLocation}
          />
        </FormGroup>
        <Link to={"/GetAllCustomers"}>
          <Button color="primary"  className="float-end btn btn-primary">View Customer List</Button>  
        </Link>
        <Button  color="primary" style={{marginRight:"10px"}} className=" float-end ">Add Customer</Button>
      </Form>
      </div>
    );
}
export default CreateCustomer;