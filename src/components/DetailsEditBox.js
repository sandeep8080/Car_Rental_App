import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { selectCarType, selectDestination, selectNumberOfTravellers, selectSourceLocation } from '../common/selectors/travelDetailsSelector';


const useStyles = makeStyles({
    gridStyle: {
        borderBottom: '1px solid #010a1029',
        paddingBottom: '20px'
    },
    detailsBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: '14px'
    },
    detailsStyle: {
        fontSize: '18px'
    },
    buttonStyle: {
        color: '#0F53FB',
        padding: '0',
        fontWeight: '600',
        textTransform: 'capitalize'
    }
});

const TripDetails = (props) => {
    const {
        sourceLocation,
        destination,
        carType,
        numberOfTravellers } = props;
    const classes = useStyles();
    return (
        <Grid
            className={classes.gridStyle}
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
        >
            <Box className={classes.detailsBox}>
                <Typography color="textSecondary" className={classes.title} gutterBottom>
                    JOURNEY DETAILS
                </Typography>
                <Typography variant="h5" component="h2" className={classes.detailsStyle}>
                    {sourceLocation} - {destination}
                </Typography>
                <Typography variant="h5" component="h2" className={classes.detailsStyle}>
                    {numberOfTravellers} Persons-{carType}
                </Typography>
            </Box>
            <Button
                className={classes.buttonStyle}
                // onClick={edit}
            >
                Edit
            </Button>
        </Grid>


    )
};

const mapStateToProps = state => ({
    sourceLocation: selectSourceLocation(state),
    destination: selectDestination(state),
    carType: selectCarType(state),
    numberOfTravellers: selectNumberOfTravellers(state),
});

export default connect(mapStateToProps)(TripDetails);