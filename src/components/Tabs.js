import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Form from './Form';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../styles/tabs.css';
import Grid from '@mui/material/Grid';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <Grid container className="all-tabs" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Grid item xs={12}  md={5} lg={5}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab icon={<HotelIcon />} label="Hotel" {...a11yProps(0)} />
            <Tab icon={<FlightTakeoffIcon />} label="Flight" {...a11yProps(1)} />
            <Tab icon={<DirectionsCarIcon />} label="Car Rental" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <Grid item xs={12}  md={7} lg={7}>
          <div className='tabs-right'>
            {/* <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6}> */}
                <div className='options'>
                  <div className='round-trip'>
                    <h2>Round trip</h2>
                    <span> <ArrowDropDownIcon /></span>
                  </div>
                </div>
          
              {/* <Grid item xs={12} sm={6} md={6} lg={6}> */}
                <div className='passenger'>
                  <h2>1 passenger</h2>
                  <span> <ArrowDropDownIcon /></span>
                </div>
              {/* </Grid> */}
              {/* </Grid> */}
            {/* </Grid> */}
          </div>
        </Grid>
      </Grid>

          <CustomTabPanel value={value} index={0}>
            <p>No data available</p>
          </CustomTabPanel>
       
        
          <CustomTabPanel value={value} index={1}>
            <Form />
          </CustomTabPanel>
       
       
          <CustomTabPanel value={value} index={2}>
            <p>No data available</p>
          </CustomTabPanel>
       
      
    </Box>
  );
}
