import React from 'react'
import BotonVolver from '../components/BotonVolver'
import { Button, ButtonGroup, Checkbox, Container, makeStyles, Typography } from '@material-ui/core';
import FormularioRegistro from '../components/FormularioRegistro';


export default function Register() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true)
    const toggleCheckbox = event =>{
        setChecked(event.target.checked)
    }
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
             <ButtonGroup>
               <Button className={classes.btn}>Registrar cuenta</Button>
             </ButtonGroup>

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
        fontWeight:"normal"
    },
}))   