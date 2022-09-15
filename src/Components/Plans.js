import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { NetflixButton } from '../styled'

const Plans = ({cost,children}) => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography  variant='h5'>{children}</Typography>
      <NetflixButton radius >Subscribe</NetflixButton>
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
    display:'flex',
    justifyContent:'space-between',
    width:'100%',
    margin:'20px 0px'
  }
}))

export default Plans