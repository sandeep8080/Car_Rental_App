import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, Container, Grid, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     gridStyle: {
//         borderBottom: '1px solid #010a1029',
//         paddingBottom: '20px'
//     },
//     detailsBox: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start'
//     },
//     title: {
//         fontSize: '14px'
//     },
//     detailsStyle: {
//         fontSize: '18px'
//     },
//     buttonStyle: {
//         color: '#0F53FB',
//         padding: '0',
//         fontWeight: '600',
//         textTransform: 'capitalize'
//     }
// });

const ContactDtlsForm = ({ data }) => {
    const formik = useFormik({
        initialValues: { ...data },
        onSubmit: (values) => {
            console.log('ContactForm:', values);
        }
    });
    //const classes = useStyles();
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                required
                fullWidth
                id='idMNumber'
                variant='outlined'
                name='mNumber'
                InputLabelProps={{
                    shrink: true,
                }}
                label='Enter your 10 digits Mobile number'
                value={formik.values.mNumber}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                required
                id='idName'
                variant='outlined'
                InputLabelProps={{
                    shrink: true,
                }}
                name="name"
                label='Enter your Name'
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            <TextField
                id='idRemark'
                variant='outlined'
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                name="remark"
                label='Enter remarks (optional)'
                value={formik.values.remark}
                onChange={formik.handleChange}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                type="submit"
            >
                Verify via OTP
            </Button>
        </form>
    )
};

export default ContactDtlsForm;