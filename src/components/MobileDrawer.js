import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Badge, IconButton, Typography, Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

const styles = {
  drawerList: {
    width: 250,
    padding:'10px 0px'
  },
  userAvatar: {
    width: '35px',
    height: '35px',
  },
  notificationsIcon: {
    fontSize: '2rem',
  },
  badge: {
    margin: '10px 0px',
  },
  closeIcon: {
    cursor:'pointer',
    left:'-6rem',
  
  },
};

const UserAvatar = styled(Avatar)(styles.userAvatar);

const MobileDrawer = ({ isDrawerOpen, setIsDrawerOpen, handleDrawerClose }) => {
  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
     
      <List sx={styles.drawerList}>
        <ListItem  onClick={handleDrawerClose}>
        <IconButton button  sx={styles.closeIcon}>
        <CloseIcon />
      </IconButton>
        </ListItem>
        <ListItem button >
          <ListItemIcon>
            <UserAvatar alt="User Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" />
          </ListItemIcon>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Delowar
          </Typography>
        </ListItem>

        <ListItem button >
          <ListItemIcon>
            <Badge badgeContent={1} color="error" sx={styles.badge}>
              <NotificationsIcon color="action" sx={styles.notificationsIcon} />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>

        <ListItem button >
          <ListItemIcon>
            <UserAvatar alt="User Avatar" style={styles.userAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj37cdDSbQUZCOMJ89E5qYTxu4Sh3-waFAew&usqp=CAU" />
          </ListItemIcon>
          <h3 className="usd-text">USD</h3>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
