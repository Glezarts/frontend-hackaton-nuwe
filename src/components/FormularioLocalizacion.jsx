import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

export default function Profile() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <form action="">
                <label htmlFor="">Número de teléfono</label>
                <input type="number"  max="9"/>
                <label htmlFor="">Número de teléfono</label>
                <input type="number"  max="9"/>
            </form>
        </div>


    )
}
const useStyles = makeStyles((theme) =>({
   
}))   