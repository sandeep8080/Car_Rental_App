import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from "react-router-dom";
import { selectMobileNumber, selectName, selectRemark } from '../common/selectors/travelDetailsSelector';
import { saveStepTwoAdditionalDetails } from '../common/actions/travelDetailsAction';
import { OTP } from '../common/constants/routeConstants';

const useStyles = makeStyles({
    textFieldMargin: {
        margin: '10px 0'
    },
});
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object({
    mobileNumber: Yup
        .string()
        .matches(phoneRegExp, "Please enter a vaild Mobile No")
        .test('len', 'Enter a valid 10 digit Mobile Number', val => val.length === 10)
});

const ContactDtlsForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        mobileNumber,
        name,
        remark,
    } = props;
    const formik = useFormik({
        initialValues: {
            mobileNumber,
            name,
            remark,
        },
        onSubmit: (values) => {
            // handleSendOtp(values);
            dispatch(saveStepTwoAdditionalDetails(values));
            navigate(OTP);
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
                name='mobileNumber'
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
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
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

const mapStateToProps = (state) => ({
    mobileNumber: selectMobileNumber(state),
    name: selectName(state),
    remark: selectRemark(state),
});

export default connect(mapStateToProps)(ContactDtlsForm);