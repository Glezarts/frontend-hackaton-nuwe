import React from 'react'
import { ButtonGroup, makeStyles, Typography } from '@material-ui/core';
import Hexagon from '../assets/Polygon 3-1.png'
import HexagonOutline from '../assets/Polygon 3.png'
import Iconbriefcase from '../assets/briefcase.png'
import Iconuser from '../assets/user.png'
import { MdArrowForward } from "react-icons/md";
import {Link} from 'react-router-dom'

export default function Inicio() {
    const classes = useStyles();
    return (
        <div className={classes.container}> 
        <Typography className={classes.login}>Ya tienes cuenta? <span>Inicia sesión</span></Typography> 
        <div className={classes.content}>
        <Typography className={classes.title}>¡Únete a la comunidad!</Typography>
        <Typography className={classes.subtitle}>Para empezar, dinos que cuenta te gustaría abrir</Typography>
        <Link to="/register" style={{textDecoration:"none"}}>
            <ButtonGroup className={classes.button}>
            <div className={classes.groupIcon}>
            <img src={Hexagon} alt="Contenedor icono" />
            <img src={Iconuser} alt="Icono user" />
            </div>
            <div className={classes.groupText}>
            <Typography style={{color:"black"}}>Developers</Typography>
            <Typography className={classes.description}>Cuenta personas para entrar en el mundo dev</Typography>
            </div>
            <MdArrowForward className={classes.icon}/>
            
            </ButtonGroup>
        </Link>
        <ButtonGroup className={classes.button2}>
        <div className={classes.groupIcon}>
        <img src={HexagonOutline} alt="Contenedor icono" />
        <img src={Iconbriefcase} alt="Icono user" />
        </div>
        <div className={classes.groupText}>
        <Typography>Business</Typography>
        <Typography className={classes.description}>Tienes o perteneces a una compañía</Typography>
        </div>
        <MdArrowForward className={classes.icon}/>
        </ButtonGroup>
        </div>
        </div>
        )
    }
    const useStyles = makeStyles((theme) =>({
        container:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            margin:0
        },
        content:{
            width:"426px",
            margin:"auto 50%"
        },
        login:{
            position:"absolute",
            top: "70px",
            right:"81px",
            color:"#8692A6",
            fontSize:"18px",
            alignSelf:"flex-end",
            "& span":{
                color: "#569B51",
            }
            
        },
        title:{
            fontWeight: "bold",
            fontSize: "30px",
        },
        subtitle:{
            fontSize:"18px",
            fontWeight:"normal",
            color:"#8692A6",
            
        },
        button:{
            boxShadow:" 0px 2px 14px 1px rgba(0, 0, 0, 0.06)",
            width:"426px",
            height:"108px",
            borderRadius:"6px",
            display:"flex",
            justifyContent:"space-between",
            margin:"28px 0px",
            border:" 1px solid #4F934A",
            backgroundColor:"#F5F9FF",   
                
        },
        button2:{
            boxShadow:" 0px 2px 14px 1px rgba(0, 0, 0, 0.06)",
            width:"426px",
            height:"108px",
            borderRadius:"6px",
            display:"flex",
            justifyContent:"space-between",
            margin:"28px 0px",
        },
        groupIcon:{
            position:"relative",
            padding:"28px",
            "& img":{
                position:"absolute",
                margin:"auto",
                top:0,
                bottom:0,
                left:0,
                right:0,
                
            },
            "& img:nth-child(2)":{
                margin:"auto",
            }
            
        },
        groupText:{
            padding:"20px 0px 28px 0px",
            textAlign:"left"
        },
        description:{
            fontWeight:"normal", 
            color:"#8692A6", 
            fontSize:"14px"
        },
        icon:{
            width:"10px",
            color:"#569B51",
            padding:"0px 36px"
        }
    }))