import { AppBar, Toolbar, IconButton, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from '@mui/system';
import ActionButtons from '../ActionIcons/ActionIconsStyled';
import Logo from '../Logo/Logo';
import DrawerComp from '../DrawerComp/DrawerComp';
import MenuComp from '../MenuComp/MenuComp';

function Header() {
    const theme = useTheme();
    const breakpointsDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const breakpointsUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <AppBar color='white' sx={{color: 'black', height: '6.4rem'}}>
                <Toolbar sx={{height: '100%'}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} component='div'>
                        {breakpointsDownMd && <DrawerComp />}
                        <Logo>
                            <Typography color='secondary' sx={{fontFamily: 'La Belle Aurore', fontSize: '46px'}}>
                                Cats & friends
                            </Typography>
                        </Logo>
                        {breakpointsUpMd && <MenuComp flexDirection='row'/>}
                        {breakpointsUpMd && <ActionButtons sx={{display: 'flex', gap: '2rem', marginRight: '0.625rem', marginLeft: '0.625rem'}}>
                            <IconButton color='muted'>
                                <FavoriteIcon />
                            </IconButton>
                            <Divider orientation='vertical' />
                            <IconButton color='muted'>
                                <PersonIcon />
                            </IconButton>
                            <Divider orientation='vertical' />
                            <IconButton color='muted'>
                                <NotificationsIcon />
                            </IconButton>
                        </ActionButtons>}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;