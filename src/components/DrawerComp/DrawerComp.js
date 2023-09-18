import React from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuComp from "../MenuComp/MenuComp";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu.js';

function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <MenuComp flexDirection='column' />
            </Drawer>
        </React.Fragment>
    )
}

export default DrawerComp;