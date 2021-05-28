import {
    Box, Typography, TextField, InputAdornment,
    Checkbox, FormControlLabel, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TripDetails from '../DetailsEditBox';
import ContactDtlsForm from '../ContactDetailsForm';
import { useFormik } from 'formik';



const StepTwo = ({ data, handleEdit }) => {
    const formik = useFormik({
        initialValues: { ...data },
        onSubmit: (values) => {
            console.log('stepTwo:', values);
        }
    })
    return (
        <>
            <TripDetails data={data} edit={handleEdit} />
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    required
                    id='idBidPrice'
                    name='bidPrice'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                &#x20b9;
                            </InputAdornment>
                        ),
                    }}
                    value={formik.values.bidPrice}
                    onChange={formik.handleChange}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formik.values.bidChecked}
                            onChange={formik.handleChange}
                            name="bidChecked"
                        />
                    }
                    label="Rate Negiotable"
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                    type="submit"
                >
                    Next
                </Button>
            </form>
            <ContactDtlsForm data={data} />
        </>
    )
};

export default StepTwo;

