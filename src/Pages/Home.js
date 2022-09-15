import React from 'react'
import { makeStyles } from '@material-ui/core'
import Header from '../Components/Header'
import Banner from '../Components/Banner'

const Home = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header/>
      <Banner/>
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
  }
}))

export default Home