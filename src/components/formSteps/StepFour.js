import {
    Button
} from '@material-ui/core';
import React from 'react';
import TripDetails from '../DetailsEditBox';
import ContactDetails from '../ContactDetails';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from "react-router-dom";

const StepFour = ({ data, handleEdit }) => {
    return (
        <>
            <TripDetails data={data} edit={handleEdit} />
            <ContactDetails data={data} />
            <Button
                id='idSubmitBid'
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => console.log('Final Data:', data)}
            >
                Submit Bid
            </Button>
        </>
    )
};

export default StepFour;

