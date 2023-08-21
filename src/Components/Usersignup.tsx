import React, { FormEvent, useState, ChangeEvent } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'

const Usersignup = () => {
  const [data, setData] = useState({ usersName: "", email: "", phoneNumber: 0 })
  const navigate = useNavigate();
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  const navigateUser = () => {
    if (localStorage.getItem('usersName') && localStorage.getItem('email') && localStorage.getItem('pnumber')) {
      navigate("/content")
    }
    else {

      navigate("/")
    }
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('usersName', data.usersName)
    localStorage.setItem('email', data.email)
    localStorage.setItem('pnumber', data.phoneNumber.toString());
    navigateUser()
  }

  return (

    <React.Fragment>
      <div style={{ margin: "4rem 3rem" }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1 style={{fontFamily: "math"}}>Register yourself!</h1>
          <TextField
            label="Name"
            required
            variant="outlined"
            color="primary"
            type="text"
            fullWidth
            sx={{ mb: 3 }}
            name="usersName"
            onChange={handleOnChange}
          />
          <TextField
            label="Email"
            required
            variant="outlined"
            color="primary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
            name="email"
            onChange={handleOnChange}
          />

          <TextField
            label="Phone Number (+91)"
            required
            variant="outlined"
            color="primary"
            type="number"
            fullWidth
            sx={{ mb: 3 }}
            name="phoneNumber"
            onChange={handleOnChange}
            inputProps={{ maxLength: 10 }}
          />
          <Button variant="contained" type="submit">Register</Button>

        </form>
      </div>
    </React.Fragment>
  );
}
export default Usersignup



