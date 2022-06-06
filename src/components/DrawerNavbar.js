import React, { useState } from 'react';
import { Button, Toolbar, AppBar, Drawer, List, ListItem, ListItemText, Divider, Link } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Logo from '../images/logo.png';

export default function DrawerNavbar() {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <AppBar elevation={0} style={{ 
            backgroundColor: "white",
            position: "fixed",
            top: "0",
            justifyContent: "center",
            alignItem: "center",
            height: "80px"
        }}>
            <Toolbar>
                <Drawer
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    anchor="right"
                >
                    <List >
                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button href="/taxinova" style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "100%",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <HomeOutlinedIcon  style={{ color: "red"}} />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    Strona Główna
                                </div>

                            </Button>
                        </ListItem>

                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button href="/taxinova/gallery" style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "100%",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <CollectionsOutlinedIcon style={{ color: "red"}}  />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    Galeria
                                </div>
                            </Button>
                        </ListItem>

                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button href="/taxinova/contact" style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "100%",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <EmailOutlinedIcon  style={{ color: "red"}} />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    Kontakt
                                </div>
                            </Button>
                        </ListItem>

                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "100%",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <CloseOutlinedIcon  style={{ color: "red"}} />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    Zamknij
                                </div>
                            </Button>
                        </ListItem>
                    </List>
                </Drawer>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}>

                    <Button href="taxinova/" style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                justifyContent: "center",
                                alignItem: "center"
                            }}>
                        <img src={Logo} alt="Logo" width="70px" />
                    </Button>


                    <Button onClick={() => setOpenDrawer(!openDrawer)} style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                justifyContent: "center",
                                alignItem: "center"
                            }}>
                        <MenuOutlinedIcon style={{ color: "red"}} />
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}
