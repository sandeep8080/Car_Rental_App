import React from 'react';
import { useFormik } from 'formik';
import {
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Button,
    Grid,
    Box
} from '@material-ui/core';

const StepOne = ({ data, nextStep }) => {
    const formik = useFormik({
        initialValues: { ...data },
        onSubmit: (values) => {
            console.log("stepOne:", values);
            nextStep(values);
        }
    });


    const handleBillDetails = (values) => {
        console.log("StepOne:", values)
        nextStep(values);
    };


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

            {/* <div>
                    <FormControl variant="outlined">
                        <InputLabel shrink >Select Car Type</InputLabel>
                        <Select
                            id='idCarType'
                            name='carType'
                            value={formik.values.carType}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value="HatchBack">HatchBack</MenuItem>
                            <MenuItem value="Sedan">Sedan</MenuItem>
                            <MenuItem value="SUV">SUV</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        required
                        id='idcarType'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        select
                        name="carType"
                        label='Car Type'
                        value={formik.values.destination}
                        onChange={formik.handleChange}
                    >
                        
                        <MenuItem value="HatchBack">HatchBack</MenuItem>
                        <MenuItem value="Sedan">Sedan</MenuItem>
                        <MenuItem value="SUV">SUV</MenuItem>
                    </TextField>

                </div>
                <div>
                    <TextField
                        required
                        id='idDest'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label='Number of Travellers'
                    />
                </div> */}
            <Box style={{ margin: '20px 0' }}>
                <TextField
                    required
                    id='idDest'
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
                />
            </Box>
            <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                type="submit"
            >
                Enter Bill Details
            np</Button>
        </form>
    )
};

export default StepOne;
