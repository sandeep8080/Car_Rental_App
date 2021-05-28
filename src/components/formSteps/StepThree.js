import {
    Box, Typography, TextField, InputAdornment,
    Button, Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import TripDetails from '../DetailsEditBox';
import ContactDetails from '../ContactDetails';

const useStyles = makeStyles({
    textStyle: {
        fontSize: '20px',
        textAlign: 'start'
    },
    editBtnStyle: {
        color: '#0F53FB',
        padding: '0',
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    otpBoxStyle: {
        height: '80px',
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    inputStyle: {
        width: '38px',
        border: 0,
        borderBottom: '1px solid',
        fontSize: '60px',
        textAlign: 'center'
    },
    linkStyle: {
        fontSize: '16px',
        marginBottom: '20px'
    }
})



const StepThree = ({ data, handleEdit, handleEditMNumber, moveToCheckOut }) => {
    console.log('Step Three:', data);
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const classes = useStyles();

    // TODO Need to check it
    const handleOTP = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return false;
        let otpCopy = [...otp];
        otpCopy[index] = value;
        console.log(otp, otpCopy);
        // setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);
        setOtp(otpCopy);
        //console.log(otp, otpCopy);

        if (e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
         moveToCheckOut(otpCopy);
    }
    return (
        <>
            <TripDetails data={data} edit={handleEdit} />
            <ContactDetails data={data} />
            <Box>
                <Typography variant="h5" component="h2" className={classes.textStyle}>
                    We’ve sent an OTP to your mobile number, Please enter it below to submit your bid {data.mNumber}
                    <Button
                        className={classes.editBtnStyle}
                        onClick={handleEditMNumber}
                    >
                        Edit
                    </Button>
                </Typography>
            </Box>
            <Box className={classes.otpBoxStyle}>
                {otp.map((d, index) => <input
                    key={index}
                    maxLength='1'
                    value={d}
                    className={classes.inputStyle}
                    onChange={(e) => handleOTP(e, index)}
                    onFocus={e => e.target.select()}
                />
                )}
            </Box>
            <Link
                component="button"
                variant="body2"
                className={classes.linkStyle}
                onClick={() => {
                    console.info("New OTP Send to you registerd Mobile no");
                }}
            >
                Resend OTP Again
                </Link>
        </>
    )
};

export default StepThree;

