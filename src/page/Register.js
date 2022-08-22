import axios from 'axios';
import React, { useState } from 'react'
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';



export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value);
    


    const handleOnSubmit = (e) => {
        e.preventDefault();
        const data = {
          username: name,
          email: email,
          password: password,
          appUserRoles: ["USER"]
        };
        axios.post("http://localhost:8080/users/signup", data)
          .then(function (response) {
            console.log(response);
          })
      };


  return (
    <Container className='border shadow mt-5 pb-5 '>
    <div className="App">
        <h2>Register</h2>
        <Form className="form" onSubmit={handleOnSubmit}>
        <FormGroup>
            <Label for="Username">Username</Label>
            <Input
              type="text"
              name="Username"
              id="Username"
              placeholder="Username"
              onChange={handleChangeName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
              onChange={handleChangeEmail}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              onChange={handleChangePassword}
            />
          </FormGroup>
        <Button block>Add</Button>
      </Form>
    </div>
    </Container>
  )
}
