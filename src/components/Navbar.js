import React from 'react';
import { Stack, Button, Toolbar, AppBar, List, ListItem } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Logo from '../images/logo.png'

export default function Navbar() {
    return (
        <div>
            <AppBar elevation={0} style={{
                position: "static",
                backgroundColor: "white",
                justifyContent: "center",
                alignItem: "center",
                height: "80px"
            }}>
                <Toolbar>
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
                        <List component={Stack} direction="row" dense>
                            <ListItem style={{
                                margin: 0,
                                padding: 0
                            }}>
                                <Button href="/" style={{
                                    padding: "10px",
                                    margin: "5px",
                                    color: "black",
                                    whiteSpace: "nowrap"
                                }}>
                                    <HomeOutlinedIcon  style={{ color: "red"}} />
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
                                <Button href="/gallery" style={{
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

                            <ListItem style={{
                                margin: 0,
                                padding: 0
                            }}>
                                <Button href="/contact" style={{
                                    padding: "10px",
                                    margin: "5px",
                                    color: "black",
                                    width: "100%",
                                    justifyContent: "left",
                                    alignItem: "center"
                                }}>
                                    <EmailOutlinedIcon style={{ color: "red"}}  />
                                    <div style={{
                                        marginLeft: "10px"
                                    }}>
                                        Kontakt
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
