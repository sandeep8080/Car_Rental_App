import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';

const useStyles = makeStyles({
    textFieldMargin: {
        margin: '10px 0'
    },
});
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object({
    mNumber: Yup
        .string()
        .matches(phoneRegExp, "Please enter a vaild Mobile No")
        .test('len', 'Enter a valid 10 digit Mobile Number', val => val.length === 10)
});

const ContactDtlsForm = ({ data, handleSendOtp }) => {
    const formik = useFormik({
        initialValues: { ...data },
        onSubmit: (values) => {
            handleSendOtp(values)
        },
        validationSchema: validationSchema
    });
    const classes = useStyles();
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                className={classes.textFieldMargin}
                required
                fullWidth
                id='idMNumber'
                variant='outlined'
                name='mNumber'
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            +91-
                        </InputAdornment>
                    ),
                }}
                label='Enter your 10 digits Mobile number'
                value={formik.values.mNumber}
                onChange={formik.handleChange}
                error={formik.touched.mNumber && Boolean(formik.errors.mNumber)}
                helperText={formik.touched.mNumber && formik.errors.mNumber}
            />
            <TextField
                className={classes.textFieldMargin}
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
                className={classes.textFieldMargin}
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
                onSubmit={() => formik.handleSubmit}
            >
                Verify via OTP
            </Button>
        </form>
    )
};

export default ContactDtlsForm;