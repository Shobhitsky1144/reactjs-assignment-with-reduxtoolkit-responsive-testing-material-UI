import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid, Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';
import MobileDrawer from './MobileDrawer';
import '../styles/header.css'

const styles = {
  toolbar: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  brandLogo: {
    width: '40px',
    height: '40px',
  },
  userAvatar: {
    width: '35px',
    height: '35px',
  },
  notificationsIcon: {
    fontSize: '2rem',
    marginTop: '-8px',
  },
  drawerList: {
    width: 250,
  },
};
const UserAvatar = styled(Avatar)(styles.userAvatar);
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };


  
  return (
    <>
      <AppBar position="static" color="">
        <Toolbar style={styles.toolbar}>
          <Grid container alignItems="center" spacing={2} xs={12} sm={6} md={4} lg={4}>
            <Grid item>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpgXFkhB8Gd01PzolTa8k7K-C0W6tt4Oey4Spzc6cWugz2_LYLkNolgbjIYgL8l1IrtE&usqp=CAU"
                alt="Brand Logo"
                style={styles.brandLogo}
              />
            </Grid>
            <Grid item>
              <h3 className='brand-text'>
                TripGuide
              </h3>
            </Grid>
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" md={8} lg={8}>
            <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
              <Grid item>
                <Grid container alignItems="center" spacing={1} className='country-container'>
                  <Grid item>
                    <h3 className='usd-text'>USD</h3>
                  </Grid>
                  <Grid item>
                    <UserAvatar alt="User Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj37cdDSbQUZCOMJ89E5qYTxu4Sh3-waFAew&usqp=CAU" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item spacing={1} style={{ marginRight: '25px' }}>
                <IconButton color="inherit">
                  <Badge badgeContent={1} color="error">
                    <NotificationsIcon color="action" sx={styles.notificationsIcon} />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item sx={{ marginTop: '-2px' }}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <UserAvatar alt="User Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Delowar</Typography>
                  </Grid>
                  <Grid item>
                    <ArrowDropDownIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid>
              <IconButton
                color="inherit"
                onClick={handleDrawerOpen}
                edge="end"
                sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
          <MobileDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleDrawerClose={handleDrawerClose}/>
        </Toolbar>
      </AppBar>

      
    </>
  );
};

export default Header;
