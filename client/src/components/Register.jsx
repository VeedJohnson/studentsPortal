import { useState } from "react";
import axios from "axios";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Register(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  console.log(props);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Form
        className="w-50 card p-5"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();

          axios
            .post("http://localhost:5000/api/user/register", {
              firstname,
              lastname,
              email,
              password,
            })
            .then(({ data }) => {
              console.log(data);
              if (data?.status === "success") {
                alert("User registered succesfully, please login");
                props.history.push("/");
              }
            })
            .catch(({ response }) => {
              setError({
                data: response?.data?.data,
                status: response?.data?.status,
              });
              console.log(error);
              alert("Email address already registered");
            });
        }}
      >
        <div className="logo-area" style={{color: "black", margin: "auto"}}>
              <p className="logo">
                  GROUP <span className="group-number">I</span>
              </p>
              <p className="logo-sub">UNIVERSITY</p>
          </div>
          <p style={{marginLeft: "7px", fontWeight: "500"}}>Register Here</p>
        <FormGroup className="m-2">
          <FormControl
            type="text"
            value={firstname}
            placeholder="First name"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="m-2">
          <FormControl
            type="text"
            value={lastname}
            placeholder="Last name"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="m-2">
          <FormControl
            type="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="m-2">
          <FormControl
            type="password"
            value={password}
            placeholder="Create Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="m-2">
          <FormControl
            type="submit"
            value="Register"
            className="btn btn-primary"
          />
        </FormGroup>
        <Link className="nav-link active" aria-current="page" to="/" style={{color: "blue", marginLeft: "-5px"}}>
          Login
        </Link>
      </Form>
    </div>
  );
}
