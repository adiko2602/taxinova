import React from 'react';
import { AppBar, Button, Toolbar, useMediaQuery, useTheme, IconButton, Typography, ButtonGroup } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import Navbar from './Navbar'
import DrawerNavbar from './DrawerNavbar';

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <div>
            {isMobile ?
                (<div style={{
                    marginTop: "80px"
                }}>
                    <DrawerNavbar />
                </div>) :
                (<Navbar />)}
        </div>
    );

}
