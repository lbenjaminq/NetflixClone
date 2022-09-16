import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Row from "../Components/Row"
import {requests} from "../requests"
import Footer from '../Components/Footer/Footer'

const Home = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
  }
}))

export default Home