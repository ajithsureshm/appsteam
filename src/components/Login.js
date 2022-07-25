import React, { useState } from "react";
import "./Login.css";
// import { students } from "../students.json";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

function Login() {
  const navigate = useNavigate();

  const [students, setStudent] = useState([]);

  async function handleLogin(e) {
    e.preventDefault();

    const fetchData = async () => {
      await fetch("/students.json")
        .then((res) => res.json())
        .then((data) => setStudent(data.students));
    };

    const student = setStudent.find((i) => i.id == regNum);


    <Home student={student}/>
    fetchData();


    console.log(student);

    

  }

  const [regNum, setRegNum] = useState();

  const [dob, setDob] = useState();

  let item = { regNum, dob };

  console.log(item);

  return (
    <div>
      <div className="loginParentDiv">
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Registration Number</label>
          <br />
          <input
            className="input"
            type="number"
            value={regNum}
            onChange={(e) => setRegNum(e.target.value)}
            id="fname"
            name="number"
          />
          <br />
          <label htmlFor="lname">Date Of Birth</label>
          <br />
          <input
            className="input"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            id="lname"
            name="date"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
