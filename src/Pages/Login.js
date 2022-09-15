import React from 'react'
import { makeStyles } from '@material-ui/core'
import NetflixLogo from '../Images/NetflixLogo.png'
import NetflixFondo from '../Images/netflixFondo.png'

const Login = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img src={NetflixLogo} className={classes.logo} />
      {/* <NetflixButton /> */}
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
    height:'100vh',
    backgroundImage:`url(${NetflixFondo})`,
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    objectFit:'contain'
  },
  logo:{
    width:'100px'
  }
}))


export default Login