import {
    Box, Typography, TextField, InputAdornment,
    Checkbox, FormControlLabel, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TripDetails from '../DetailsEditBox';
import ContactDtlsForm from '../ContactDetailsForm';
import { useFormik } from 'formik';



const StepThree = ({ data, handleEdit }) => {
    const formik = useFormik({
        initialValues: { ...data },
        onSubmit: (values) => {
            console.log('stepThree:', values);
        }
    })
    return (
        <>
            <TripDetails data={data} edit={handleEdit} />
        </>
    )
};

export default StepThree;

