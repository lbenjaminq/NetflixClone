import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import banner from '../Images/banner.jpg'

const Banner = () => {

  const classes = useStyles()

  const truncate = (description,n) =>{
    return description?.length > n ? `${description.substr(0,n-1)}...` : description
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant='h2' component='h1'>Movie Title</Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My list</Button>
        </div>
        <Typography variant='h6' className={classes.description}>
          {truncate('Movie description',13)}
        </Typography>
        <div className={classes.offset}></div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
    backgroundImage:`url(${banner})`,
    position:'relative',
    height:'440px',
    objectFit:'contain',
    backgroundSize:'cover',
    backgroundPosition:'center',
    color:'#fff'
  },
  content:{
    // border:'2px solid red',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
  },
  buttons:{
    // border:'2px solid red',
    "& button" : {
      backgroundColor:"#a1c3c3",
      cursor:'pointer',
      fontWeight:700,
      borderRadius:'5px',
      padding:theme.spacing(1,4,1,4),
      marginRight:"1rem",
    },
    "& button:hover": {
      color:'#000',
      backgroundColor: "#e6e6e6"
    }
  },
  offset:{
    // border:'2px solid red',
    position:'absolute',
    top:'30vh',
    bottom:0,
    left:0,
    right:0,
    zIndex:99,
    backgroundImage:"linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#100)"
  }
}))

export default Banner