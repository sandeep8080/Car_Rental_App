import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TripDetails from './DetailsEditBox';



const StepTwo = ({ data }) => {
    return (
        <TripDetails data={data} />
    )
};

export default StepTwo;

