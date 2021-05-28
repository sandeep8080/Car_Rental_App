import {
    Button
} from '@material-ui/core';
import React from 'react';
import TripDetails from '../DetailsEditBox';
import ContactDetails from '../ContactDetails';


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

