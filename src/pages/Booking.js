
import BasicTabs from '../components/Tabs'
import TravelCard from '../components/TravelCard';
import Grid from '@mui/material/Grid';
import '../styles/booking.css'

const Booking = () => {
 
  return (
    <>
<div className='hero-section'>
  <div className='first-section'>
  <h1>Amazing Flight To</h1>
  <h1>Switzerland</h1>
  <p>Find and book a great experience</p>
  </div>
  <div className='second-section'>
    <div className="booking-cards">
    <div className='tabs'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <BasicTabs />
        </Grid>      
      </Grid>   
    </div> 
    </div>
    </div>  
  </div>
  <div className='card-results'>
    <div className="wrapper center">
  <h1>Search a best place in the world</h1>
  <p>whether you're looking for places for a vacation.We are here to Guide you</p>
  <p>about the details you need to check in and ease your trips in advance.</p>
  </div>
    <TravelCard/>
    </div>
 </>
  )
}

export default Booking