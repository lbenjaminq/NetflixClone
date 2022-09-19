import NetflixLogo from "../Images/NetflixLogo.png";
import NetflixFondo from "../Images/netflixFondo.png";
import { useHistory } from "react-router-dom";
import { NetflixButton, NetflixInput } from "../styled";
import { makeStyles, Typography } from "@material-ui/core";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <img src={NetflixLogo} className={classes.logo} alt="logo" />
      <NetflixButton
        className={classes.session}
        wide="small"
        onClick={handleClick}
      >
        Sign in
      </NetflixButton>
      <div className={classes.subroot}>
        <Typography variant="h2">
          Unlimited movies, TV shows, and more.
        </Typography>
        <Typography variant="h5">Watch anywhere. Cancel anytime.</Typography>
        <Typography variant="h6">
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <div>
          <NetflixInput placeholder="Email address" />
          <NetflixButton>GET STARTED</NetflixButton>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${NetflixFondo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "contain",
    position: "relative",
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 40,
    width: "200px",
    cursor: "pointer",
    zIndex: "100",
  },
  session: {
    position: "fixed",
    right: 20,
    top: 20,
  },
  subroot: {
    color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h2,h5,h6": {
      zIndex: "100",
      textAlign: "center",
    },
  },
}));

export default Login;
