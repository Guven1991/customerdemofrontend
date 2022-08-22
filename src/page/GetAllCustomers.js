import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "reactstrap";

function GetAllCustomers() {
  // const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState({
    content: [],
    size: 5,
    number: 0,
  });
  const { content: customers, last, first } = page;

  const onClickNext = () => {
    const nextPage = page.number + 1;
    loadUsers(nextPage);
  };

  const onClickPrevious = () => {
    const nextPrevious = page.number - 1;
    loadUsers(nextPrevious);
  };

  const loadUsers = async (page) => {
    try {
      const response = await getAllCustomers(page);
      setPage(response.data);
    } catch (error) {}
  };
  async function getAllCustomers(page = 0, size = 5) {
    try {
      const response = await axios.get(
        `http://localhost:8080/customers?page=${page}&size=${size}`
      );
      console.log(response.data);
      setPage(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    axios
      .delete(`http://localhost:8080/delete-customer/${id}`)
      .then(() => console.log("Delete successful"));
    console.log(id);
    window.location.reload();
  };

  const customerList = customers.map((customer) => {
    return (
      <tr key={customer.id}>
        <th scope="row">{customer.id}</th>
        <td>{customer.name}</td>
        <td>{customer.surname}</td>
        <td>{customer.location}</td>
        <td>
          <div className="d-flex " style={{ width: "400px" }}>
            <Button
              style={{ marginRight: "10px" }}
              color="danger"
              onClick={() => handleDelete(customer.id)}
            >
              Delete
            </Button>
            {/* <Link to={`/updateCity/${city.id}`}>
                <Button style={{ marginRight: "10px" }} color="success">
                  Edit
                </Button>
              </Link> */}
            {/* <Link to={`/cityDetails/${city.id}`}>
                <Button style={{ marginRight: "10px" }} color="warning">
                  Details
                </Button>
              </Link> */}
            {/* <div onClick={() => handleSelected(city)}>
                <DistrictCreateModal selectedCity={selectedCity} />
              </div> */}
          </div>
        </td>
      </tr>
    );
  });

  let actionDiv = (
    <div className="d-flex justify-content-between">
        {first === false &&
        <button className="btn btn-sm btn-light" onClick={onClickPrevious}>Previous</button>}
        {last === false && <button className="btn btn-sm btn-light" onClick={onClickNext}>Next</button>}
    </div>
);
  return (
    <Container className="d-flex flex-column mt-5 align-items-center h-100 justify-content-center">
      <div>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>{customerList}</tbody>
        </Table>
      </div>
      {actionDiv}
      <div>
        <Link to="/CreateCustomer">
          <button className=" btn btn-primary">Add Customer</button>
        </Link>
      </div>
    </Container>
  );
}
export default GetAllCustomers;
