import React, { useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import instance from '../axios'

const Row = ({title,fetchUrl,isLarge}) => {

  const classes = useStyles()
  const [movie,setMovies] = useState([])
  const base_url= "https://image.tmdb.org/t/p/original/"

  useEffect(()=>{
   const current = async ()=>{
      const request= await instance.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    current()
  },[fetchUrl])

  return (
    <div className={classes.root}>
      <Typography variant='h4'>{title}</Typography>
      <div className={classes.subroot}>
        {
          movie?.map((movie)=>(
            ((isLarge && movie.poster_path) ||
            (!isLarge && movie.backdrop_path)) && (
                <img
                  className={`${classes.poster} ${isLarge && classes.posterLarge}`}
                  src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie?.name}
                  key={movie.id}
                />
            )
          ))
        }
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
    color:"white",
    marginTop:"2%",
    marginLeft:"1.80%"
  },
  subroot:{
    display:"flex",
    overflowY:"hidden",
    overflowX:"scroll",
    "&::-webkit-scrollbar" : {
      display:"none",
    },
    overflow: 'auto',
    whiteSpace: "nowrap",
  },
  poster:{
    maxHeight:"12rem",
    objectFit:"contain",
    marginRight: theme.spacing(1),
    transition:"transform 450ms",
    "&:hover": {
       transform: "scale(1.05)"
    },
  },
  posterLarge: {
     maxHeight:"15rem"
  }
}))

export default Row