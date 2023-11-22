import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; 
import { DateRangePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";

export default function DateRangePickers({start,end}) {

  return (
    <div className='date-parent'   >
    <LocalizationProvider dateAdapter={AdapterDateFns}   >
      <DemoContainer components={['DateRangePicker']}  sx={{
        width: '95%', // Default width for larger devices
        '@media (max-width: 600px)': {
          width: '100%', // Change to 100% on devices with a width of 600 pixels or less (small devices)
        },
      }} className="date-pick">
        <DateRangePicker localeText={{ start,end}}  />
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}
