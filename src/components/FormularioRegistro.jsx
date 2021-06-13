import React, { useState }  from 'react'
import {Link} from 'react-router-dom'
import { Button, ButtonGroup, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Typography, useFormControl, withStyles } from '@material-ui/core';
import GoogleIcon from "../assets/flat-color-icons_google.png"

const expresionRegular ="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/";



export default function FormularioRegistro(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true)
    const toggleCheckbox = event =>{
        setChecked(event.target.checked)
    }
    const [email, setEmail] = useState({input:"", valido: null})
    const onChange = (e)=>{
        setEmail({...setEmail, input: e.target.value});
        
    }
    const [open, setOpen]= React.useState(false)

    const handleClickOpen = ()=>{
       
        if(email.value!= null){
            setOpen(false);
            <Link to="/profile"></Link>
        }
        if(email.value == null){
            setOpen(true)
        }
    }
    const handleClose = () => {
        setOpen(false);
    }
   
    return (
        <div className={classes.root}>
             <form  className={classes.form}>
                 <label className={classes.labelname}>Nombre completo*</label>
                <input className={classes.name} type="text" focused={true} placeholder="Enter your name"></input>
                <label className={classes.labelemail}>Correo electrónico*</label>
                <input 
                className={classes.email} 
                type="text" 
                placeholder="Enter email address"
                name="email"
                estado={email}
                change={setEmail}
                value={setEmail.input}
                onChange={onChange}
                expresionRegular={expresionRegular}
                ></input>
                <label className={classes.labelpass}>Contraseña*</label>
                <input className={classes.pass} type="text" placeholder="Enter password"></input>
                <Checkbox 
                checked={checked}
                onChange={toggleCheckbox}
                color="primary" 
                style={{marginLeft:"-10px"}}/> 
                <Typography className={classes.terminos}> Acepto los términos y condiciones</Typography>
             </form>
              <Button 
             className={classes.btn}
             onClick={handleClickOpen}
             >
             Registrar cuenta</Button> 
               <div className={classes.divider}>
                   <div  className={classes.div}></div>
                   <span style={{color:"#BABABA", margin:"0px 10px"}}> o </span>              
                   <div  className={classes.div}></div>
               </div>
               <Link to="/profile"><Button className={classes.btnGoogle} > <img src={GoogleIcon} alt="Icono Google"></img> Regístrate con Google</Button> </Link>
               <Dialog
        open={open}
        onClose={handleClose}
     
      >
        <DialogTitle id="alert-dialog-title">¡Ups, algo ha ido mal!</DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            Parece que el correo electrónico introducido ya está en uso. Por favor, revísalo y vuelve a intentarlo de nuevo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.btnClose} onClick={handleClose} color="primary">

            Cerrar
          </Button>
         
        </DialogActions>
      </Dialog>
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
    btn:{
        backgroundColor: "#4F934A",
        border:"none",
        width:"100%",
        padding: "10px",
        color:"white",
        textTransform:"none",
        fontWeight:"normal",
        "&:hover":{
            backgroundColor:"#4F934A"
        }
    },
    divider:{
        display:"flex",
        marginTop:"10px",
        alignItems:"center"
    },
    div:{
        width:"200px",
        height:"1px",
        backgroundColor:"#F5F5F5"
    },
    btnGoogle:{
        width:"100%",

        textTransform:"none",
        padding: "10px 90px",
        boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.08)",
        justifyContent:"space-around",
        
    },
    btnClose:{
        textAlign:"left",
        border: "1px solid #1F1F1F",
        color:"#1F1F1F"
    },
    
}))   
