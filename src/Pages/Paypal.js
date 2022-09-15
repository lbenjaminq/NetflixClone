import React from 'react'
import { makeStyles } from '@material-ui/core'

const Paypal = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      Paypal
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
  }
}))

export default Paypal