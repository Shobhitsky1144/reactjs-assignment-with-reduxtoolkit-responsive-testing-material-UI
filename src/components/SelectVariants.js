import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({ passenger, trip }) {
  const [age, setAge] = React.useState(passenger?1:20);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
     <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
<Select
  labelId="demo-simple-select-standard-label"
  id="demo-simple-select-standard"
  value={age}
  onChange={handleChange}
  sx={{ borderBottom: 0 }}
>
  <MenuItem value="">
    <em>None</em>
  </MenuItem>
  {passenger
    ? [
        <MenuItem key={1} value={1}>
          1 passenger
        </MenuItem>,
        <MenuItem key={2} value={2}>
          2 passengers
        </MenuItem>,
        <MenuItem key={3} value={3}>
          3 passengers
        </MenuItem>,
      ]
    : trip
    ? [
        <MenuItem key={10} value={10}>
          One Round
        </MenuItem>,
        <MenuItem key={20} value={20}>
          Round Trip
        </MenuItem>,
      ]
    : null}
</Select>

      </FormControl>
    </div>
  );
}

  