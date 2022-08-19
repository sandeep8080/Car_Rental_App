import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import {
    TextField,
    MenuItem,
    Button,
    Grid,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import { TRAVEL_DETAIL } from '../../common/constants/routeConstants';
import { saveStepOneDetails } from '../../common/actions/travelDetailsAction';
import { useDispatch } from 'react-redux/es/exports';
import { connect } from 'react-redux';
import { selectCarType, selectDestination, selectNumberOfTravellers, selectSourceLocation } from '../../common/selectors/travelDetailsSelector';

const useStyles = makeStyles({
    textFieldStyle: {
        textAlign: "left",
    },
});

const validationSchema = Yup.object({
    sourceLocation: Yup
        .string(),
    destination: Yup
        .string(),
    travellers: Yup
        .number()
        .max(7, 'More than 7 people are not allowed')
})

const StepOne = ({ sourceLocation, destination, carType, numberOfTravellers }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            sourceLocation,
            destination,
            carType,
            numberOfTravellers
        },
        onSubmit: (values) => {
            // updating the Next step count
            const newValues = {
                ...values,
                steps: 2,
            }
            // updating the store value
            dispatch(saveStepOneDetails(newValues));
            // Routing to the next page
            navigate(TRAVEL_DETAIL);
        },
        validationSchema: validationSchema
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid direction="row"
                justify="space-between"
                container
            >
                <TextField
                    style={{ width: '260px' }}
                    required
                    id='idSrcLocat'
                    variant='outlined'
                    name='sourceLocation'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label='Source Location'
                    value={formik.values.sourceLocation}
                    onChange={formik.handleChange}
                    error={formik.touched.sourceLocation && Boolean(formik.errors.sourceLocation)}
                    helperText={formik.touched.sourceLocation && formik.errors.sourceLocation}
                />
                <TextField
                    style={{ width: '260px' }}
                    required
                    id='idDest'
                    variant='outlined'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="destination"
                    label='Destination'
                    value={formik.values.destination}
                    onChange={formik.handleChange}
                />
            </Grid>
            <TextField
                className={classes.textFieldStyle}
                fullWidth
                style={{ marginTop: '20px' }}
                required
                id='idcarType'
                variant='outlined'
                InputLabelProps={{
                    shrink: true,
                }}
                select
                name="carType"
                label='Car Type'
                value={formik.values.carType}
                onChange={formik.handleChange}
            >
                <MenuItem value="HatchBack">HatchBack</MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
            </TextField>

            <Box style={{ margin: '20px 0' }}>
                <TextField
                    className={classes.textFieldStyle}
                    required
                    id='idTravellerNo'
                    variant='outlined'
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type='number'
                    name="numberOfTravellers"
                    label='Number of Travellers'
                    value={formik.values.numberOfTravellers}
                    onChange={formik.handleChange}
                    error={formik.touched.numberOfTravellers && Boolean(formik.errors.numberOfTravellers)}
                    helperText={formik.touched.numberOfTravellers && formik.errors.numberOfTravellers}
                />
            </Box>
            <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                type="submit"
            >
                Enter Bill Details
            </Button>
        </form>
    )
};

const mapStateToProps = (state) => ({
    sourceLocation: selectSourceLocation(state),
    destination: selectDestination(state),
    carType: selectCarType(state),
    numberOfTravellers: selectNumberOfTravellers(state),
});

export default connect(mapStateToProps)(StepOne);
