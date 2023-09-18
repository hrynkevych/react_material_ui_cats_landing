import React from "react";
import SimpleBottomNavigation from "../BottomNav/BottomNav.js";
import { Box, Grid } from "@mui/material";

const Footer = () => (
  <>
  <Box sx={{color: 'light.main', backgroundColor: 'dark_footer.main'}}>
    
    <Grid container spacing={2}>

      <Grid item align={"left"}>
        
          <Grid item md={12} lg={6} variant='inherit' component="div" sx={{textTransform: 'uppercase'}}>
            About us
          </Grid>
        
          <Grid>
          Since January 2008, our mission has been to improve the health of homeless animals and increase their chances for survival and adoption. We aim to eliminate animal homelessness and euthanasia.
          </Grid>

        <Grid>
        <SimpleBottomNavigation />
        </Grid>

      </Grid>

      <Grid item align={"left"}>

        <Grid item xs={12} sm={6} variant='inherit' component="div" sx={{textTransform: 'uppercase'}}>
          
            Information
          
        </Grid>
        <Grid>
          Your donation helps to continue reaching over 12,000 homeless animals a year by donating food and life-saving supplies to rescue groups, shelters, pets of the homeless, and struggling pet owners.
        </Grid>
      </Grid>
      
      <Grid item align={"left"}>
        <Grid item xs={12} sm={6} variant='inherit' component="div" sx={{textTransform: 'uppercase'}}>
          
            Our account
          
        </Grid>
        <Grid>
          <Grid>Be Brave</Grid>
          <Grid>Like Ukraine!</Grid>
        </Grid>
      </Grid>

    </Grid>

    </Box>
  </>
);

export default Footer;