import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@material-ui/core';

const StepOne = ({ data }) => {
    return (
        <Formik>
            {() => (
                <Form>
                    <TextField
                        required
                        id='idSrcLocat'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label='Source Location'
                    />
                    <TextField
                        required
                        id='idDest'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label='Destination'
                    />
                    <div>
                        <FormControl variant="outlined">
                            <InputLabel shrink >Select Car Type</InputLabel>
                            <Select
                                id='idCarType'
                            >
                                <MenuItem value="HatchBack">HatchBack</MenuItem>
                                <MenuItem value="SEdan">Sedan</MenuItem>
                                <MenuItem value="SUV">SUV</MenuItem>
                            </Select>
                        </FormControl>
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
                    </div>
                </Form>
            )}
        </Formik>
    )
};

export default StepOne;
