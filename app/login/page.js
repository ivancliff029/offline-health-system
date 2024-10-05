// LoginPage.js
"use client"; // For Next.js

import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Rrequired"),
    password: yup
      .string()
      .min(6, "Must be at least 6 characters long")
      .required("Required"),
  });
  


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const formik = useFormik({
    initialValues: {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(formData);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Log in with Google');
  };

  return (
    <>
    <Navbar />
    <Container component="main" maxWidth="xs" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" align="center">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
                required
                type="email"
                value={formik.values.email}
                onChange={handleChange}
                helperText={formik.errors.email}
                error={formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                size="small"
                fullWidth
                required
                type="password"
                value={formik.values.password}
                onChange={handleChange}
                helperText={formik.errors.password}
                error={formik.errors.password}
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
            Log In
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            or
          </Typography>
          <IconButton
            onClick={handleGoogleLogin}
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            <GoogleIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>
              Log in with Google
            </Typography>
          </IconButton>
        </Box>
      </Paper>
    </Container>
    </>
  );
};

export default LoginPage;
