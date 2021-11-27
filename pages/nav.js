import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Link from 'next/link';


//material ui styling property
const useStyle=makeStyles({
   navprop:{margin:'0%0%0%34%'},
   linkprop:{textDecoration:'none'},
   btnprop:{margin:'0%0%0%2%',color:'white' },
   home:{color:'white'},
  }) 


export default function Nav() {
  const classes=useStyle()


return (
  <React.Fragment>
      
  <AppBar className={classes.navprop}>
        
  <Toolbar>
         
  <Link href='/' className={classes.linkprop}>
  
  <Typography className={classes.home}> HOME </Typography>
  
  </Link>
        
  <Link href='/admin' className={classes.linkprop} > 
        
  <IconButton className={classes.btnprop}> ADMIN </IconButton>
  
  </Link>
          
  </Toolbar>
  </AppBar> 
  <Toolbar />
      
  </React.Fragment>
  );
}