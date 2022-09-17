import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Detail = () => {

  const classes = useStyles();
  const detail = useSelector((state)=> state.detail.detail)

  return (
    <div className={classes.root}>
      {/* <div style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${detail?.backdrop_path}")`,
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className={classes.img}> */}
        {detail.id}
      {/* </div> */}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position:'absolute',
    maxWidth:'800px',
    margin:'0 auto',
    border:'2px solid red',
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    color:"white",
  },
  img:{
    height:'500px',
    width:'500px'
  }
}));


export default Detail