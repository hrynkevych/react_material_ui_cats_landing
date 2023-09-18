import { styled } from "@mui/material";

const Logo = styled('div')(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap'
    },
}));

export default Logo;