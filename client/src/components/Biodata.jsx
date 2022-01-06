import axios from "axios";
import { useState } from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import "./Navigation.css";

export default function Biodata(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [parentFirstname, setParentFirstname] = useState("");
  const [parentLastname, setParentLastname] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("");
  const [jambRegNumber, setJambRegNumber] = useState("");
  const [department, setDepartment] = useState("");


  const genderList = ["Male", "Female", "I'd rather not say"];
  const stateList = ["Anambra", "Delta", "Edo", "Ekiti", "Imo", "Lagos", "Osun", "Rivers"];

  const fileValidation = () => {
    let img = document.getElementById("passport");
    if (typeof (img.files) != "undefined") {
        let size = parseFloat(img.files[0].size / (1024 * 1024)).toFixed(2); 
        if(size > 2) {
            alert('Please select image size less than 2 MB');
        }else{
            return ('success');
        }
    }
  }

  return (
    <div>
      <Form
        method="POST"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          const user = JSON.parse(localStorage.getItem("media_user"));

          const formData = new FormData();
          formData.append("firstname", firstname);
          formData.append("lastname", lastname);
          formData.append("dateOfBirth", dateOfBirth);
          formData.append("gender", gender);
          formData.append("image", image);
          formData.append("nationality", nationality);
          formData.append("stateOfOrigin", stateOfOrigin);
          formData.append("phoneNumber", phoneNumber);
          formData.append("parentFirstname", parentFirstname);
          formData.append("parentLastname", parentLastname);
          formData.append("parentPhoneNumber", parentPhoneNumber);
          formData.append("jambRegNumber", jambRegNumber);
          formData.append("department", department);
          formData.append("user", user.id);

          axios
            .post("http://localhost:5000/api/biodata/new", formData, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            })
            .then(({ data }) => {
              console.log(data);
              props.history.push("/dashboard");
              alert("Biodata submitted succesfully");
            })
            .catch(({ response }) => {
              console.log(response);
              alert("An error occured, try again");
            });
        }}
      >
        <FormGroup className="biodata-input">
          <FormControl
            type="text"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            placeholder="First name"
          />
        </FormGroup>
        <FormGroup className="biodata-input">
          <FormControl
            type="text"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            placeholder="Last name"
          />
        </FormGroup>
        <FormGroup className="biodata-input">
          <FormControl
            id="dob"
            type="date"
            onChange={(e) => {
              setDateOfBirth(e.target.value.substring(0, 10));
            }}
            placeholder="Date of Birth"
          />
        </FormGroup>
        <FormGroup className="biodata-input">
          <select
            type="text"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="form-control"
            placeholder="Gender"
          >
            <option>Select Gender</option>
            {genderList?.map((g) => {
              return <option>{g}</option>;
            })}
          </select>
        </FormGroup>
        <FormGroup className="biodata-input">
          <label for="files" class="btn">Upload passport</label>
          <FormControl
            id="passport"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              fileValidation();
            }}
          />
        </FormGroup>
        <FormGroup className="biodata-input">
          <FormControl
            type="text"
            onChange={(e) => {
              setNationality(e.target.value);
            }}
            placeholder="Nationality"
          />
        </FormGroup>
        <FormGroup className="biodata-input">
          <select
            type="text"
            onChange={(e) => {
              setStateOfOrigin(e.target.value);
            }}
            className="form-control"
            placeholder="State of Origin"
          >
            <option>Select State of origin</option>
            {stateList?.map((g) => {
              return <option>{g}</option>;
            })}
          </select>
        </FormGroup>
        <FormGroup className="biodata-input">
          <FormControl
            type="text"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            placeholder="Phone number"
          />
        </FormGroup>

        <FormGroup className="biodata-input">
          <FormControl
            type="text"
            onChange={(e) => {
              setParentFirstname(e.target.value);
            }}
            placeholder="Parent/Guardian First name"
          />
        </FormGroup>
        <FormGroup className="biodata-input">
          <FormControl
            type="text"
            onChange={(e) => {
              setParentLastname(e.target.value);
            }}
            placeholder="Parent/Guardian Last name"
          />
        </FormGroup>
        <FormGroup className="biodata-input">
          <FormControl
            type="text"
            onChange={(e) => {
              setParentPhoneNumber(e.target.value);
            }}
            placeholder="Parent/Guardian Phone number"
          />
        </FormGroup>

        <FormGroup className="biodata-input">
          <FormControl
            type="text"
            onChange={(e) => {
              setJambRegNumber(e.target.value);
            }}
            placeholder="JAMB Registration number"
          />
        </FormGroup>
        <FormGroup className="biodata-input">
          <FormControl
            type="text"
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            placeholder="Department of Study"
          />
        </FormGroup>

        <FormGroup className="biodata-input">
          <FormControl
            type="submit"
            className="btn btn-primary"
            value="Submit form"
          />
        </FormGroup>
      </Form>
    </div>
  );
}
