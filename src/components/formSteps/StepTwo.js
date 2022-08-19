import { connect } from 'react-redux';
import {
    Box, TextField, InputAdornment,
    Checkbox, FormControlLabel, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import TripDetails from '../DetailsEditBox';
import ContactDtlsForm from '../ContactDetailsForm';
import { useFormik } from 'formik';
import { selectBidPrice, selectisBidChecked } from '../../common/selectors/travelDetailsSelector';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from "react-router-dom";
import { saveStepTwoDetails } from '../../common/actions/travelDetailsAction';
import { OTP } from '../../common/constants/routeConstants';

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
// const StepTwo = ({ data, handleEdit, handleSendOtp, handleBid }) => {
const StepTwo = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        isBidChecked,
        bidPrice,
    } = props;
    const [isShow, setIsShow] = useState(false);
    const [isShowBtn, setIsShowBtn] = useState(true);
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            isBidChecked,
            bidPrice,
        },
        onSubmit: (values) => {
            dispatch(saveStepTwoDetails(values));
            // navigate(OTP);
            setIsShow(true);
            setIsShowBtn(false);
        }
    });

    return (
        <>
            <TripDetails />
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
                            checked={formik.values.isBidChecked}
                            onChange={formik.handleChange}
                            name="isBidChecked"
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
                    </Button>
                }

            </form>
            {isShow && <ContactDtlsForm />}
        </>
    )
};

const mapStateToProps = state => ({
    bidPrice: selectBidPrice(state),
    isBidChecked: selectisBidChecked(state),
});

export default connect(mapStateToProps,)(StepTwo);

