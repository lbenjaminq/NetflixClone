import NetflixFondo from "../Images/netflixFondo.png";
import NetflixLogo from "../Images/NetflixLogo.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { NetflixButton, NetflixInput } from "../styled";
import { makeStyles, Typography } from "@material-ui/core";
import { auth } from "../firebase";

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/home"))
      .catch((error) => alert(error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => history.push("/home"))
      .catch((error) => alert(error.message));
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src={NetflixLogo} className={classes.logo} alt="Logo" />
        <div className={classes.subroot}>
          <Typography variant="h4">SIGN IN</Typography>
          <form className={classes.form}>
            <NetflixInput
              type="email"
              value={email}
              placeholder="Email"
              className={classes.email}
              onChange={handleEmail}
            />
            <NetflixInput
              type="password"
              value={password}
              placeholder="Password"
              className={classes.password}
              onChange={handlePassword}
            />
            <NetflixButton type="submit" radius="true" onClick={handleLogin}>
              SIGN IN
            </NetflixButton>
          </form>
          <Typography variant="h7">
            New to Netflix?
            <span className={classes.signIn} onClick={handleRegister}>
              {" "}
              Sign Up now.
            </span>
          </Typography>
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
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  subroot: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 40,
    width: "200px",
    cursor: "pointer",
    zIndex: "100",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0px",
  },
  email: {
    margin: "10px 0px",
  },
  password: {
    margin: "10px 0px",
  },
  signIn: {
    cursor: "pointer",
    color: "#fff",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default SignUp;
