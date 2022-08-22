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

export default function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const data = {
          username: name,
          password: password,
          appUserRoles: ["USER"]
        };
        axios.post("http://localhost:8080/users/signin", data)
          .then(function (response) {
            console.log(response);
            localStorage.setItem("token", response.data.token);
          })
      };

  return (
    <Container className='border shadow mt-5 pb-5 '>
    <div className="App">
        <h2>Sign In</h2>
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
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              onChange={handleChangePassword}
            />
          </FormGroup>
        <Button block>Enter</Button>
      </Form>
    </div>
    </Container>
  )
}
