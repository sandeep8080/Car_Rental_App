import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const TripDetails = ({ data }) => {
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
                    {data.sourceLocation} - {data.destination}
                </Typography>
                <Typography variant="h5" component="h2" className={classes.detailsStyle}>
                    {data.travellers} Persons-{data.carType}
                </Typography>
            </Box>
            <Button className={classes.buttonStyle}>Edit</Button>
        </Grid>


    )
};

export default TripDetails;