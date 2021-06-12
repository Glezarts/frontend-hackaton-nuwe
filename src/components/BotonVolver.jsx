import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io"




export default function BotonVolver() {
    const classes = useStyles();
    return (
        <div>
                <Link className={classes.back} to="/">
                    <IoIosArrowBack style={{width:"20px"}}/>
                    <Typography> Volver</Typography>
                </Link>
             
        </div>
    )
}

const useStyles = makeStyles((theme) =>({
  
    back:{
        display:"flex",
        color:"#8692A6",
        textDecoration:"none",
        alignItems:"center",
      
    },
 



}))