import React, { Component, useState } from 'react';
import Button from "@material-ui/core/Button";
//import { TextField } from '@material-ui/core/TextField';
//import styled, { css } from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
//import { FormControlLabel } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
//import  './Form.css';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #333, #999)',
        border: 0,
        borderRadius: 15,
        width:'10px',
        color: 'white',
        padding: '0 40px',
        marginBottom: 15
    }
})
function Form() {
    const [range, setRange] = useState(0);
    const handleChange = (event, newValue) => {
        setRange(newValue);
    };
    return (
        <div className="container"  style={{margin:'20px'}}>
            <TextField placeholder='name' variant="filled" type="text"
            /><br></br>
            <TextField placeholder='Surname' variant="filled" type="text" /><br></br>
            <TextField placeholder='Email' variant="filled" type="email" /> <br></br>

            <p>How do I rate a Norsia logo?</p>

            <div >
            <Slider   className='slider-container' type='text'
             style={{
                
                 display:'inline-flex',

                 width:"200px",
                 padding:'30px'
                
                 
             }}
                value={range}
                min={0}
                step={1}
                max={10}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
                
            
            />
            </div>
            <Button
                style={{
                    fontSize: 12,
                    margin:'40px'
                }}
                variant="contained">Submit</Button> <br></br>
            
        </div>
    );
}
export default Form;