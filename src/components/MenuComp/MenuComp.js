import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, List, ListItemButton, Menu, MenuItem, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";


function MenuComp({ flexDirection }) {
    const [anchorElm, setAnchorElm] = useState(null);
    const [open, setOpen] = useState(false);

    const pages = [
        'Home',
        'Volunteer',
        'Stories',
        'Login',
        'Contact Us'
    ];

    const handleClose = () => {
        setAnchorElm(null);
        setOpen(false);
    }

    const handleClick = (e) => {
        setAnchorElm(e.currentTarget);
        setOpen(true);
    }

    return (
        <List sx={{display: 'flex', flexDirection: flexDirection, justifyContent: 'space-between', fontSize: '15px', width: '30vw'}}>
            {flexDirection === 'column' ? pages.map((page) => {
                    return (
                        page === 'Stories' ?
                            <Accordion key={page}>
                                <AccordionSummary
                                    expandIcon={<IconButton><ExpandMoreIcon sx={{fontSize: '18px'}} /></IconButton>}
                                >
                                    <Typography variant='inherit' component="div">
                                        {page}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        <ListItemButton divider>Blog</ListItemButton>
                                        <ListItemButton divider>Podcast</ListItemButton>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        :   <ListItemButton key={page} divider>
                                <Typography variant='inherit' component="div">
                                    {page}
                                </Typography>
                            </ListItemButton>
                    )
                })
                : pages.filter((page) => page !== 'Contact Us').map((page) => {
                    return (
                        page === 'Stories' ?
                            <ListItemButton key={page} sx={{display: 'flex', alignItems: 'center'}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}} onClick={handleClick}>
                                        <Typography variant='inherit' component="div" sx={{textTransform: 'uppercase'}}>
                                            {page}
                                        </Typography>
                                        <ExpandMoreIcon sx={{fontSize: '18px'}} />
                                </Box>
                                <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
                                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                                </Menu>
                            </ListItemButton>
                        :   <ListItemButton key={page}>
                                <Typography variant='inherit' component="div" sx={{textTransform: 'uppercase'}}>
                                    {page}
                                </Typography>
                            </ListItemButton>
                    )
                })
            }
        </List>
    )
}

export default MenuComp;