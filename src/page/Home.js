import { Link } from "react-router-dom";

function Home(){
return(
    <div
      style={{ marginTop: "150px"}}
      className="container"
    >
      <div className=" row ">
        <div className="d-flex justify-content-center">
          <h1>Welcome to The Customer Demo App</h1>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="CreateCustomer">
            <button style={{ marginRight: "10px" }} className="btn btn-primary">
              Add Customer
            </button>
          </Link>
          <Link to="getAllCustomers">
            <button className="btn btn-primary">View Customer List</button>
          </Link>
        </div>
      </div>
    </div>
);
}

export default Home;