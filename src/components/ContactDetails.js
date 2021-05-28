import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridStyle: {
        marginTop: '20px',
        borderBottom: '1px solid #010a1029',
        paddingBottom: '20px',
        marginBottom: '20px'
    },
    detailsBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
    },
    title: {
        fontSize: '14px'
    },
    detailsStyle: {
        fontSize: '18px'
    },
    detailsStyleBid: {
        fontSize: '35px'
    },
    buttonStyle: {
        color: '#0F53FB',
        padding: '0',
        fontWeight: '600',
        textTransform: 'capitalize'
    }
});

const ContactDetails = ({ data }) => {
    console.log('ContactDTLS:',data);
    const classes = useStyles();
    return (
        <Grid
            className={classes.gridStyle}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Box className={classes.detailsBox}>
                <Typography color="textSecondary" className={classes.title} gutterBottom>
                    BID DETAILS
                </Typography>
                <Typography variant="h5" component="h2" className={classes.detailsStyle}>
                    {data.mNumber}
                </Typography>
                <Typography variant="h5" component="h2" className={classes.detailsStyle}>
                    {data.name}
                </Typography>
                <Typography variant="h5" component="h2" className={classes.detailsStyle}>
                    {data.remark}
                </Typography>
            </Box>
            <Typography variant="h5" component="h2" className={classes.detailsStyleBid}>
                &#x20b9; {data.bidPrice}
            </Typography>
        </Grid>


    )
};

export default ContactDetails;