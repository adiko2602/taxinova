import React from 'react'
import downloadAndroid from '../images/downloadAndroid.png';
import Logo from '../images/logo.png'
import { Typography, Stack, Button, Toolbar, AppBar, List, ListItem, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#eeeeee",
      justifyContent: "space-between",
      padding: "2rem"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center"
      }}>
        <img src={Logo} alt="Logo" width="70px" />
      </div>
      <div style={{
        marginTop: "2rem",
        width: "40vw"
      }}>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "end",
        alignItems: "center"
      }}>
        <Typography variant="body2" style={{
          marginRight: ".1em"
        }}>
          Odwiedź <strong>Nova</strong>

        </Typography>
        <Button component={Link} to="/" style={{
          padding: "5px",
          color: "#ec0000",
          justifyContent: "center",
          alignItem: "center"
        }}>
          <FacebookIcon style={{
            fontSize: "3rem"
          }} />
        </Button>
        <Button component={Link} to="/" style={{
          padding: "5px",
          color: "#ec0000",
          justifyContent: "center",
          alignItem: "center"
        }}>
          <InstagramIcon style={{
            fontSize: "3rem"
          }} />
        </Button>
      </div>
    </div>
  )
}
