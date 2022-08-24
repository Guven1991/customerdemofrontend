import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BiSortAlt2} from "react-icons/bi";
import {
  Table,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { successNote } from "../CostumToastify";

function GetAllCustomers() {
  // const [customers, setCustomers] = useState([]);
  const [sortField, setSortField]= useState("name");
  const [isDesc, setIsDesc] = useState(false);
  const [page, setPage] = useState({
    content: [],
    size: 5,
    number: 0,
    first: true,
    last: false
  });
  const { content,last, first } = page;

  const onClickNext = () => {
    // const nextPage = page.number + 1;
    // loadUsers(nextPage);
    setPage(prev=>({...prev,number : prev.number+1}));
  };

  const onClickPrevious = () => {
    // const nextPrevious = page.number - 1;
    // loadUsers(nextPrevious);
    setPage(prev=>({...prev,number : prev.number-1}));
  };

  const loadUsers = async (page,isDesc,sortField) => {
    try {
      const response = await getAllCustomers(isDesc,sortField);
      console.log(response.number,response.size);
      setPage({...page,content:response.content,first:response.first,last:response.last,number:response.number,size:response.size});
    } catch (error) {}
  };
  async function getAllCustomers(isDesc,sortField) {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get(
        `http://localhost:8080/customer/customers/sort?page=${page.number}&size=${page.size}&isDesc=${isDesc}&sortField=${sortField}`,
        config
      );
      console.log(response.data.content);
      // setPage({...page,content:response.data});
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    loadUsers(page,isDesc,sortField);
  }, [page.number,page.size,isDesc,sortField]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(`http://localhost:8080/customer/delete-customer/${id}`, config)
      .then((res) => successNote("Delete successful"));
    console.log(id);
    setPage({...page,content:page.content.filter(content => content.id !== id)});
    setPage({...page,size:setPage.size-1})
    // setTimeout(() => {
    //           window.location.reload();
    //         }, 3000);
  };

  const customerList = content?.map((customer) => {
    return (
      <tr key={customer.id}>
        <th scope="row">{customer.id}</th>
        <td>{customer.name}</td>
        <td>{customer.surname}</td>
        <td>{customer.location}</td>
        <td>
          <div className="d-flex ">
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
      {first === false && (
        <button className="btn btn-sm btn-light" onClick={onClickPrevious}>
          Previous
        </button>
      )}
      {last === false && (
        <button className="btn btn-sm btn-light" onClick={onClickNext}>
          Next
        </button>
      )}
    </div>
  );

  return (
    <Container className="d-flex flex-column mt-5 align-items-center h-100 justify-content-center">
      <div>
        <Table responsive hover>
          <thead>
            <tr>
              <th onClick={()=>setSortField("id")}>Id</th>
              <th onClick={()=>setSortField("name")}>Name</th>
              <th onClick={()=>setSortField("surname")}>Surname</th>
              <th onClick={()=>setSortField("location")}>Location</th>
              <th onClick={()=>setIsDesc(prev=>!prev)}><BiSortAlt2/></th>
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
