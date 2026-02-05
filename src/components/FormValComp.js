import React, { useState } from "react";

const FormValComp = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    password: "",
  });

  const inputchange = (event) => {
    const {name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const check_data = (event) => {
    event.preventDefault();
      if (user.fname === "" || user.lname==="" || user.password==="") {
        window.alert("Filling all the input field");
        return false;
      }
      

      if (!user.fname.match("[a-zA-z]{2,15}")) {
      window.alert("First name should contains only character min2 and max 15");
      return false;
    }
    if (!user.lname.match("[a-zA-z]{2,15}")) {
      window.alert("last name should contains only character min2 and max 15");
      return false;
    }
    if (!user.password.match("[a-zA-z0-9!@#$%^&*]{8}")) {
      console.log(user.password)
      window.alert("password should contain 8 characters and assigned letters,numbers,symbols only");
      return false;
    }
      window.alert(JSON.stringify(user));
    };
  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={check_data}>
        <input
          type="text"
          name="fname"
          onChange={inputchange}
          placeholder="enter first name"
          value={user.fname}
        />
        <input
          type="text"
          name="lname"
          onChange={inputchange}
          placeholder="enter last name"
          value={user.lname}
        />
        <input
          type="password"
          name="password"
          onChange={inputchange}
          placeholder="enter last name"
          value={user.password}
        /><br></br>
        <button type="submit">Sbumit</button>
      </form>
    </div>
  );
};

export default FormValComp;
