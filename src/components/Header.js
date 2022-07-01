import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import Navbar from './Navbar'
import DrawerNavbar from './DrawerNavbar';

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <div>
            {isMobile ?
                (<div style={{
                    marginTop: "10vh"
                }}>
                    <DrawerNavbar />
                </div>) :
                (<Navbar />)}
        </div>
    );

}
