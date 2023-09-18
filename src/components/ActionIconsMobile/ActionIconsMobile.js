import * as React from 'react';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Divider, IconButton } from '@mui/material';
import ActionIcons from '../ActionIcons/ActionIconsStyled';

export default function ActionIconsMobile() {
  return (
    <Box position='fixed' sx={{bgcolor: 'inverse.main', top: 'auto', bottom: 0, width: '100%'}}>
      <ActionIcons color='primary' sx={{ display: 'flex', justifyContent: 'space-around', padding: '0 5.5vw'}}>
          <IconButton color='primary'>
              <FavoriteIcon />
          </IconButton>
          <Divider orientation='vertical' />
          <IconButton color='primary'>
              <PersonIcon />
          </IconButton>
          <Divider orientation='vertical' />
          <IconButton color='primary'>
              <NotificationsIcon />
          </IconButton>
      </ActionIcons>
    </Box>
  );
}