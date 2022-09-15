import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import NetflixLogo from '../Images/NetflixLogo.png'
import NetflixFondo from '../Images/netflixFondo.png'
import { NetflixButton, NetflixInput } from '../styled'

const Login = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
        {/* <div className={classes.background} /> */}
        <img src={NetflixLogo} className={classes.logo} />
        <NetflixButton className={classes.session}>INICIAR SESIÓN</NetflixButton>
      <div className={classes.subroot}>
        <Typography variant='h2'>Películas y series ilimitadas y mucho más</Typography>
        <Typography variant='h5'>Disfruta donde quieras. Cancela cuando   quieras
        </Typography>
        <Typography variant='h6'>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix
        </Typography>
        <div>
          <NetflixInput placeholder='email'/>
          <NetflixButton>GET STARTED</NetflixButton>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
    height:'100vh',
    backgroundImage:`linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${NetflixFondo})`,
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    objectFit:'contain',
    position:'relative',
  },
  logo:{
    position:"fixed",
    top:0,
    left:40,
    width:"200px",
    cursor:'pointer',
    zIndex:"100"
  },
  session:{
    position:"fixed",
    right:20,
    top:20,
    // zIndex:"100",
  },
  subroot:{
    color:'white',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    "& h2,h5,h6":{
      zIndex:"100",
      textAlign:'center'
    }
  },
}))


export default Login