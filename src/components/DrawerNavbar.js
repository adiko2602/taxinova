import React, { useState } from 'react';
import { Button, Toolbar, AppBar, Drawer, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
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
            minHeight: "10vh"
        }}>
            <Toolbar>
                <Drawer
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    anchor="right"
                >
                    <List >
                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button component={Link} to="/" style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "40vw",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <HomeOutlinedIcon style={{ color: "red" }} />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    Strona Główna
                                </div>

                            </Button>
                        </ListItem>


                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button component={Link} to="/price" style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "40vw",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <AttachMoneyIcon style={{ color: "red" }} />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    Cennik
                                </div>

                            </Button>
                        </ListItem>


                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button component={Link} to="/contact" style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "40vw",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <MailOutlineIcon style={{ color: "red" }} />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    Kontakt
                                </div>

                            </Button>
                        </ListItem>

                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button component={Link} to="/gallery" style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "40vw",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <CollectionsOutlinedIcon style={{ color: "red" }} />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    Galeria
                                </div>
                            </Button>
                        </ListItem>

                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button component={Link} to="/about" style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "40vw",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <InfoOutlinedIcon style={{ color: "red" }} />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    O nas
                                </div>
                            </Button>
                        </ListItem>

                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <Button style={{
                                padding: "10px",
                                margin: "5px",
                                color: "black",
                                width: "40vw",
                                justifyContent: "left",
                                alignItem: "center"
                            }}>
                                <CloseOutlinedIcon style={{ color: "red" }} />
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
                    width: "100vw"
                }}>

                    <Button component={Link} to="/" style={{
                        padding: "10px",
                        margin: "5px",
                        color: "black",
                        justifyContent: "center",
                        alignItem: "center",
                        height: "10vh"
                    }}>
                        <img src={Logo} alt="Logo" style={{
                            maxWidth: "85%",
                            maxHeight: "85%",
                            objectFit: "contain"
                        }} />
                    </Button>


                    <Button onClick={() => setOpenDrawer(!openDrawer)} style={{
                        padding: "10px",
                        margin: "5px",
                        color: "black",
                        justifyContent: "center",
                        alignItem: "center"
                    }}>
                        <MenuOutlinedIcon style={{ color: "red" }} />
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}
