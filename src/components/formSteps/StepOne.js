import React from 'react';
import { useFormik } from 'formik';
import {
    TextField,
    MenuItem,
    Button,
    Grid,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';

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

const StepOne = ({ data, nextStep }) => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: { ...data },
        onSubmit: (values) => {
            //console.log("stepOne:", values);
            nextStep(values);
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
                    name="travellers"
                    label='Number of Travellers'
                    value={formik.values.travellers}
                    onChange={formik.handleChange}
                    error={formik.touched.travellers && Boolean(formik.errors.travellers)}
                    helperText={formik.touched.travellers && formik.errors.travellers}
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

export default StepOne;
