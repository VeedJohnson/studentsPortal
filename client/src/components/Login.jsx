import { useState } from "react";
import axios from "axios";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Logo from "./Logo";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Form
        className="w-50 card p-5"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();

          axios
            .post("http://localhost:5000/api/user/login", { email, password })
            .then(({ data }) => {
              if (data?.status === "success") {
                const user = { ...data?.data, token: data?.token };
                localStorage.setItem("media_user", JSON.stringify(user));
                props.history.push("/dashboard");
              }
            })
            .catch(({ response }) => {
              setError({
                data: response?.data?.data,
                status: response?.data?.status,
              });
              console.log(error);
              alert(error.data);
            });
        }}
      > 
          <div className="logo-area" style={{color: "black", margin: "auto"}}>
              <p className="logo">
                  GROUP <span className="group-number">I</span>
              </p>
              <p className="logo-sub">UNIVERSITY</p>
          </div>
          <p style={{marginLeft: "7px", fontWeight: "500"}}>Login Here</p>
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
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="m-2">
          <FormControl
            type="submit"
            value="login"
            className="btn btn-primary"
          />
        </FormGroup>
        <Link className="nav-link active" aria-current="page" to="/register" style={{color: "blue", marginLeft: "-5px"}}>
        Register
        </Link>
      </Form>
    </div>
  );
}
