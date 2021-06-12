import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'
import Background from '../assets/Background.png'
import comillasIcon from  '../assets/comillas.png'
import Vector from "../assets/Vector2.png"

export default function Portada() {
    const classes = useStyles();
    return (
        <Paper className={classes.fondo}>
           <div className={classes.container}>
               <img className={classes.comillas} src={comillasIcon} alt="Icono comillas" />
               <Typography className={classes.text}> Nuwe es la plataforma que convierte el desarrollo profesional, la búsqueda de trabajo y las conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...</Typography>
               <img className={classes.vector} src={Vector} alt="Elemento gráfico " />
           </div>
        </Paper>
    )
}

const useStyles = makeStyles((theme) =>({
  fondo:{
      width:"666px",
      height:"100vh",
      objectFit:"contain",
      backgroundImage:`url(${Background})`,
      backgroundRepeat:"no-repeat",
      position: "relative",
     "&:before":{
         backgroundColor: "rgba(86, 155, 81)",
         opacity: 0.9,
         position:"absolute",
         zIndex:0,
         top: 0,
         bottom: 0,
         left: 0,
         right: 0,
         content:"''"
     }
  },
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    flexDirection:"column",
    margin:"auto",
    width:"473px",
    padding:theme.spacing(20,0),
    gap: "60px"
  },

  comillas:{
    alignSelf:"flex-start"
  },
  text:{
      width:"473px",
      zIndex:2,
      color:"white",
      fontWeight:300,
      lineHeight: "38px",
      textAlign:"left",
      fontSize:"20px"
  },
  vector:{
    alignSelf:"flex-end",
    marginRight: "20px"


  }

}))