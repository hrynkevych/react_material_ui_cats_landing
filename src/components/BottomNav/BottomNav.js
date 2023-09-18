import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} 
        sx={{color: 'light.main', backgroundColor: 'dark_footer.main'}} 
      >
        <BottomNavigationAction style={{color: 'white'}} icon={<FacebookIcon />} />
        <BottomNavigationAction style={{color: 'white'}} icon={<TwitterIcon />} />
        <BottomNavigationAction style={{color: 'white'}} icon={<InstagramIcon />} />
      </BottomNavigation>
    </Box>
  );
}