import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import FormularioLocalizacion from '../components/FormularioLocalizacion'
import BotonVolver from '../components/BotonVolver'

export default function Profile() {
    const classes = useStyles()

    return (
                 <div className={classes.root}>
            <div className={classes.container}>
                <BotonVolver />
                <div className={classes.pasos}>
                        <Typography className={classes.num}> PASO 02/03</Typography>
                        <Typography className={classes.description}> Localización.</Typography>
                </div>
            
            </div>
             <Container className={classes.content}>
             <Typography className={classes.title}>Completa tu perfil!</Typography>
             <Typography className={classes.subtitle}>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</Typography>
            <FormularioLocalizacion/>

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