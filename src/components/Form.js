import React from 'react'
import Dropdown from './Dropdown';
import Grid from '@mui/material/Grid';
import BasicDateRangePickers from './DateRangePickers';
import { useSelector } from 'react-redux';
import { selectCountryData } from '../redux/countrySlice';

const Form = () => {
  const countryData = useSelector(selectCountryData);
  return (
    <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6} lg={4} >
        <Dropdown label="Leaving From" countryData={countryData}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} >
        <Dropdown label="Going to" countryData={countryData}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} >
          <div style={{display:'flex'}} className='date-btn-group'>
        <BasicDateRangePickers start="Check-in" end="Check-out"/>
        <button >Search</button>
        </div>
        </Grid>
       
       
    </Grid>
  )
}

export default Form