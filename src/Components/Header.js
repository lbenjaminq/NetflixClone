import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, makeStyles, Toolbar } from '@material-ui/core'
import NetflixLogo from '../Images/NetflixLogo.png'

const Header = () => {

  const classes = useStyles()
  const [show,setShow] = useState(false)

  const hideHeader = () =>{
    if(window.scrollY > 100){
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",hideHeader)
  },[])

  return (
      <AppBar 
        position='sticky' 
        elevation={0} 
        className={`${classes.root} ${show && classes.transparent}`} 
      >
        <Toolbar className={classes.toolbar}>
          <a href='/'>
            <img src={NetflixLogo} alt='logo' className={classes.img} />
          </a>
          <a href={'/profile'}>
            <Avatar variant='square' style={{cursor:'pointer'}}/>
          </a>
        </Toolbar>
      </AppBar>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
    backgroundColor:'#111',
    top:'0',
    left:'0',
    right:'0',
  },
  transparent:{
    backgroundColor:'transparent'
  },
  toolbar:{
    display:'flex',
    justifyContent:'space-between'
  },
  img:{
    width:'100px',
    cursor:'pointer'
  }
}))

export default Header