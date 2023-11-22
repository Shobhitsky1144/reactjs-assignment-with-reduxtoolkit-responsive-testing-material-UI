import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Dropdown = ({countryData,label}) => {
 
  
      return (
        <Autocomplete
          id="country-select-demo"
          sx={{ width: '100%' }}
          options={countryData}
          autoHighlight
          getOptionLabel={(option) => option.city}
          renderOption={(countryData, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...countryData}>
              <LocationOnIcon style={{color:'lightgray'}}/>
              <span className="dropdown-text">
              <h3>{option.city}<br/></h3>
              <h5>{option.country}</h5>
              </span>
            
            </Box>
          )}
          renderInput={(params) => (
            <TextField
            variant='filled'
              {...params}
              label={label}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      )
}

export default Dropdown;