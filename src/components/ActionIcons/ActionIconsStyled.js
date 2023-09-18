import { styled } from "@mui/material";

const ActionIcons = styled('div')(({theme}) => ({
    [theme.breakpoints.between('md', 'lg')]: {
        color: 'primary',
        gap: '1rem'
    }
}));

export default ActionIcons;