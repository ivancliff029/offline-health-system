// SignupPage.js
"use client"; // For Next.js

import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(6, "Must be at least 6 characters long")
    .required("Required"),
  lastName: yup
    .string()
    .min(6, "Must be at least 6 characters long")
    .required("Required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Rrequired"),
  password: yup
    .string()
    .min(6, "Must be at least 6 characters long")
    .required("Required"),
});

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {};

  const handleGoogleSignup = () => {
    // Handle Google signup logic here
    console.log("Sign up with Google");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  useEffect(() => {
    formik.validateForm()
  }, [])

  const handleChange = (e) => {
    formik.setFieldValue([e.target.name], e.target.value);
  };

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" align="center">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  value={formik.values.firstName}
                  onChange={handleChange}
                  helperText={formik.errors.firstName}
                  error={formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                  value={formik.values.lastName}
                  onChange={handleChange}
                  helperText={formik.errors.lastName}
                  error={formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  value={formik.values.email}
                  onChange={handleChange}
                  error={formik.errors.email}
                  helperText={formik.errors.email}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  size="small"
                  required
                  type="password"
                  value={formik.values.password}
                  onChange={handleChange}
                  error={formik.errors.password}
                  helperText={formik.errors.password}

                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={!formik.isValid}
            >
              Sign Up
            </Button>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              or
            </Typography>
            <IconButton
              onClick={handleGoogleSignup}
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              <GoogleIcon />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Sign up with Google
              </Typography>
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default SignupPage;
