import React from 'react'
import { makeStyles } from '@material-ui/core'

const Profile = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      Profile
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
  }
}))

export default Profile