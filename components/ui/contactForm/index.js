import { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
import TextField from '@mui/material/TextField';
import styles from './contact.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function ContactForm() {
    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')
            .required('Name is required'),
        phone: yup
            .string('Enter your Mobile Number')
            .min(10, 'Mobile should be of minimum 10 digits length')
            .required('Mobile Number is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        comment: yup
            .string('Enter your Comments')
            .required('Comments is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            comment: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //const {name, phone, email, comment} = values;
            //fetch('/')
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <CssBaseline />
            <form onSubmit={formik.handleSubmit}>
                <Card>
                    <CardContent>
                    <Grid item xs={12}>
                        
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            label="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="comment"
                            name="comment"
                            label="comment"
                            type="comment"
                            value={formik.values.comment}
                            onChange={formik.handleChange}
                            error={formik.touched.comment && Boolean(formik.errors.comment)}
                            helperText={formik.touched.comment && formik.errors.comment}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </Grid>
                    </CardContent>
                </Card>
            </form>
        </Grid>
        </Box>
    )

}