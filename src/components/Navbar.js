import React from 'react';
import { Stack, Button, Toolbar, AppBar, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Logo from '../images/logo.png'

export default function Navbar() {
    return (
        <div>
            <AppBar elevation={0} style={{
                position: "static",
                backgroundColor: "white",
                justifyContent: "center",
                alignItem: "center",
                minHeight: "10vh"
            }}>
                <Toolbar>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%"
                    }}>

                        <Button component={Link} to="/" style={{
                            padding: "10px",
                            margin: "5px",
                            color: "black",
                            justifyContent: "center",
                            alignItem: "center"
                        }}>
                            <img src={Logo} alt="Logo" width="70px" />
                        </Button>
                        <List component={Stack} direction="row" dense>
                            <ListItem style={{
                                margin: 0,
                                padding: 0
                            }}>
                                <Button component={Link} to="/" style={{
                                    padding: "10px",
                                    margin: "5px",
                                    color: "black",
                                    whiteSpace: "nowrap"
                                }}>
                                    <HomeOutlinedIcon style={{ color: "red" }} />
                                    <div style={{
                                        marginLeft: "10px"
                                    }}>
                                        Strona Główna
                                    </div>

                                </Button>
                            </ListItem>


                            <ListItem style={{
                                margin: 0,
                                padding: 0
                            }}>
                                <Button component={Link} to="/price" style={{
                                    padding: "10px",
                                    margin: "5px",
                                    color: "black",
                                    whiteSpace: "nowrap"
                                }}>
                                    <AttachMoneyIcon style={{ color: "red" }} />
                                    <div style={{
                                        marginLeft: "10px"
                                    }}>
                                        Cennik
                                    </div>

                                </Button>
                            </ListItem>


                            <ListItem style={{
                                margin: 0,
                                padding: 0
                            }}>
                                <Button component={Link} to="/contact" style={{
                                    padding: "10px",
                                    margin: "5px",
                                    color: "black",
                                    whiteSpace: "nowrap"
                                }}>
                                    <MailOutlineIcon style={{ color: "red" }} />
                                    <div style={{
                                        marginLeft: "10px"
                                    }}>
                                        Kontakt
                                    </div>

                                </Button>
                            </ListItem>


                            <ListItem style={{
                                margin: 0,
                                padding: 0
                            }}>
                                <Button component={Link} to="/gallery" style={{
                                    padding: "10px",
                                    margin: "5px",
                                    color: "black",
                                    width: "100%",
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

                            <ListItem style={{
                                margin: 0,
                                padding: 0
                            }}>
                                <Button component={Link} to="/about" style={{
                                    padding: "10px",
                                    margin: "5px",
                                    color: "black",
                                    width: "100%",
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
                        </List>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
