import {
    Box, TextField, InputAdornment,
    Checkbox, FormControlLabel, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import TripDetails from '../DetailsEditBox';
import ContactDtlsForm from '../ContactDetailsForm';
import { useFormik } from 'formik';

const useStyles = makeStyles({
    formStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '30px 0'
    },
    checkStyle: {
        marginTop: '40px'
    }
})
const StepTwo = ({ data, handleEdit, handleSendOtp, handleBid }) => {
    const [isShow, setIsShow] = useState(false);
    const [isShowBtn, setIsShowBtn] = useState(true);
    const classes = useStyles();

    const formik = useFormik({
        initialValues: { ...data },
        onSubmit: (values) => {
            setIsShow(true);
            setIsShowBtn(false);
            handleBid(values);
            console.log('stepTwo:', values);
        }
    });

    return (
        <>
            <TripDetails data={data} edit={handleEdit} />
            <form className={classes.formStyle} onSubmit={formik.handleSubmit}>
                <Box>
                    <TextField
                        required
                        id='idBidPrice'
                        name='bidPrice'
                        type='number'
                        inputProps={{ min: 0, style: { textAlign: 'center' } }}
                        InputProps={{
                            style: {
                                fontSize: '45px',
                                fontWeight: '600'
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    &#x20b9;
                                </InputAdornment>
                            ),
                        }}
                        value={formik.values.bidPrice}
                        onChange={formik.handleChange}
                    />
                </Box>

                <FormControlLabel
                    className={classes.checkStyle}
                    control={
                        <Checkbox
                            checked={formik.values.bidChecked}
                            onChange={formik.handleChange}
                            name="bidChecked"
                        />
                    }
                    label="Rate Negiotable"
                />
                {isShowBtn &&
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        disabled={formik.values.bidPrice ? false : true}
                    >
                        Next
                </Button>}

            </form>
            {isShow && <ContactDtlsForm data={formik.values} handleSendOtp={handleSendOtp} />}
        </>
    )
};

export default StepTwo;

