import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import NetflixLogo from '../Images/NetflixLogo.png'
import NetflixFondo from '../Images/netflixFondo.png'
import { NetflixButton, NetflixInput } from '../styled'

const Login = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
        <img src={NetflixLogo} className={classes.logo} />
        <NetflixButton className={classes.session}>Iniciar sesión</NetflixButton>
      <div className={classes.subroot}>
        <Typography variant='h2'>Películas y series ilimitadas y mucho más</Typography>
        <Typography variant='h5'>Disfruta donde quieras. Cancela cuando   quieras
        </Typography>
        <Typography variant='h6'>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix
        </Typography>
        <div>

          <NetflixButton>GET STARTED</NetflixButton>
        </div>
      <div className={classes.background} />
      </div>
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
    objectFit:'contain',
    position:'relative',
  },
  logo:{
    width:'100px',
    zIndex:"100"
  },
  logo:{
    position:"fixed",
    top:0,
    left:0,
    width:"150px",
    cursor:'pointer',
    zIndex:"100"
  },
  session:{
    position:"fixed",
    right:20,
    top:20,
    zIndex:"100"
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
    }
  },
  background:{
    position:'absolute',
    height:'100vh',
    width:'100%',
    backgroundColor:'rgba(0,0,0,0.5)',
    zIndex:"1"
  }
}))


export default Login