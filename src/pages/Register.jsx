import React from 'react'
import BotonVolver from '../components/BotonVolver'
import { Container, makeStyles, Typography } from '@material-ui/core';
import FormularioRegistro from '../components/FormularioRegistro';


export default function Register() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true)
    const toggleCheckbox = event =>{
        setChecked(event.target.checked)
    }
    const [openAlert, setOpenAlert] = React.useState(false)
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <BotonVolver />
                <div className={classes.pasos}>
                        <Typography className={classes.num}> PASO 01/03</Typography>
                        <Typography className={classes.description}> Personal info.</Typography>
                </div>
            
            </div>
             <Container className={classes.content}>
             <Typography className={classes.title}>Registra tu cuenta individual</Typography>
             <Typography className={classes.subtitle}>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</Typography>
             <FormularioRegistro/>


                 </Container>
        </div>

    )
}

const useStyles = makeStyles((theme) =>({
    root:{
        width:"60%"
    },
    container:{
        display:"flex",
        margin: "75px",
        justifyContent:"space-between",
   
    },
    pasos:{
        textAlign:"right",
        fontSize:"16px"
    },
    num:{
        color:"#BDBDBD",
    },
    description:{
        color:"#8692A6"
    },
    content:{ 
        width:"450px",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        margin:"auto"
    },
    title:{
        fontWeight: "bold",
        fontSize: "30px",
        marginBottom:"10px"
    },
    subtitle:{
        fontSize:"18px",
        fontWeight:"normal",
        color:"#8692A6",
        lineHeight:"28px",
        paddingBottom: "16px",
        borderBottom: "1px solid #f5f5f5"
    },
 

}))   