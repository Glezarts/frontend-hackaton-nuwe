import React from 'react'
import BotonVolver from '../components/BotonVolver'
import { Button, ButtonGroup, Checkbox, Container, makeStyles, Typography } from '@material-ui/core';


export default function FormularioRegistro() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true)
    const toggleCheckbox = event =>{
        setChecked(event.target.checked)
    }
    return (
        <div className={classes.root}>
             <form className={classes.form}>
                 <label className={classes.labelname}>Nombre completo*</label>
                <input className={classes.name} type="text" focused={true} placeholder="Enter your name"></input>
                <label className={classes.labelemail}>Correo electrónico*</label>
                <input className={classes.email} type="text" placeholder="Enter email address"></input>
                <label className={classes.labelpass}>Contraseña*</label>
                <input className={classes.pass} type="text" placeholder="Enter password"></input>
                <Checkbox 
                checked={checked}
                onChange={toggleCheckbox}
                color="primary" 
                style={{marginLeft:"-10px"}}/> 
                <Typography className={classes.terminos}> Acepto los términos y condiciones</Typography>
             </form>
      </div>
    )
}

const useStyles = makeStyles((theme) =>({

    form:{
        width:"450px",
        fontSize:"16px",
        marginTop:"24px"
    },
    labelname:{
        color:"#696F79",
        paddingBottom:"10px"
    },
    name:{
       width:"426px",
       boxSizing: "border-box",
       border:"1px solid  #8692A6",
       borderRadius: "6px",
       padding:"10px",
       margin:"10px 0px",
       "&:focus":{
        outline:"none",
        border:"1px solid #4F934A",
        boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)",
       }
    },
    labelemail:{
        color:"#696F79",
        padding:"10px 0px"
    },
    email:{
       width:"426px",
       border:"1px solid  #8692A6",
       boxSizing: "border-box",
       borderRadius: "6px",
       padding:"10px",
       margin:"10px 0px",
       "&:focus":{
        outline:"none",
        border:"1px solid #4F934A",
        boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)",
       }
    },
    labelpass:{
        color:"#696F79",
        padding:"10px 0px"
    },
    pass:{
       width:"426px",
       border:"1px solid  #8692A6",
       boxSizing: "border-box",
       borderRadius: "6px",
       padding:"10px",
       margin:"10px 0px",
       "&:focus":{
        outline:"none",
        border:"1px solid #4F934A",
        boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)",
       }
    },

    terminos:{
        display:"inline-block",
        color: "#696F79",
        marginBottom:"15px"
    },
  
}))   