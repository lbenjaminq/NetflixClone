import instance from "../axios";
import { requests } from "../requests";
import { useState, useEffect } from "react";
import { BsPlayFill } from "react-icons/bs";
import { RiInformationFill } from "react-icons/ri";
import { Button, makeStyles, Typography } from "@material-ui/core";

const Banner = () => {
  
  const classes = useStyles();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const current = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      const random = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[random]);
      return request;
    };
    current();
  }, []);

  const truncate = (description, n) => {
    return description?.length > n
      ? `${description.substr(0, n - 1)}...`
      : description;
  };


  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {movie.name || movie.title || movie.original_name || movie.description ? (
        <div className={classes.content}>
          <Typography variant="h1" component="h1" style={{ width: "70%" }}>
            {movie?.name || movie?.name || movie?.original_name}
          </Typography>
          <Typography variant="h6" className={classes.description}>
            {truncate(`${movie?.overview}`, 150)}
          </Typography>
          <div className={classes.containerButton}>
            <Button className={classes.buttons}>
              <BsPlayFill style={{ fontSize: "2rem" }} />
              Play
            </Button>
            <Button className={classes.buttonsMore}>
              <RiInformationFill
                style={{ fontSize: "2rem", marginRight: "1%" }}
              />
              More info
            </Button>
          </div>
          <div className={classes.offset}></div>
        </div>
      ) : (
        "Loading.."
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    position: "relative",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      height:"fit-content",
      width:"100%",
      marginTop:"15%",
      marginBottom:"10%"
    },
  },
  description: {
    wordWrap: "break-word",
    maxWidth: "500px",
    marginTop: theme.spacing(2),
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      width:"80%",
      height:"fit-content",
      fontSize:"1rem"
    },
  },
  content: {
    height: "80%",
    marginLeft: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      "& h1":{
        marginTop:"10%",
        minHeight:"fit-content",
        fontSize:"2rem"
      }
    },
  },
  containerButton: {
    marginTop: "50px",
  },
  buttons: {
    backgroundColor: "#fff",
    width: "150px",
    height: "50px",
    fontWeight: 700,
    borderRadius: "2px",
    padding: theme.spacing(1, 4, 1, 4),
    marginRight: "1rem",
    zIndex: "100",
    fontSize: "1.2rem",
    "&:hover": {
      backgroundColor: "#c3c3c3",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:"1rem",
      width:"30%"
    },
  },
  buttonsMore: {
    backgroundColor: "rgba(109, 109, 110, 1)",
    color: "#fff",
    width: "210px",
    height: "50px",
    fontWeight: 500,
    borderRadius: "2px",
    padding: theme.spacing(1, 4, 1, 4),
    marginRight: "1rem",
    zIndex: "100",
    fontSize: "1.1rem",
    "&:hover": {
      backgroundColor: "rgba(109, 109, 110, 0.7)",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:"1rem",
      fontSize:"0.8rem"
    },
  },
  offset: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg,transparent, rgba(30,37,37,0.61) ,#141414)",
  },
  loading: {},
}));

export default Banner;
