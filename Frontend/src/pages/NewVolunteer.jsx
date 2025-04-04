import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  ThemeProvider,
  createTheme
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 🔴 Red Theme
const redTheme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f", // Deep red
    },
    secondary: {
      main: "#f44336", // Lighter red
    },
  },
});

const NewVolunteer = () => {
  const navigate = useNavigate();

  const [volunteer, setVolunteer] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    email: "",
  });

  const handleChange = (e) => {
    setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/newvolunteers", volunteer);
      if (res.status === 201) {
        alert("Volunteer added successfully!");
        navigate("/admin/volunteers");
      }
    } catch (error) {
      console.error("Error adding volunteer:", error);
      alert("Failed to add volunteer.");
    }
  };

  return (
    <ThemeProvider theme={redTheme}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom color="primary">
          Add New Volunteer
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} required />
          <TextField label="Phone" name="phone" type="number" fullWidth margin="normal" onChange={handleChange} required />
          <TextField label="Age" name="age" type="number" fullWidth margin="normal" onChange={handleChange} required />
          <TextField label="City" name="city" fullWidth margin="normal" onChange={handleChange} required />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Volunteer
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default NewVolunteer;
