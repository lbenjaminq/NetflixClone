import Navbar from "../Components/Navbar/Navbar";
import Plans from "../Components/Plans";
import NetflixAvatar from "../Images/Netflix-avatar.png";
import { useHistory } from "react-router-dom";
import { NetflixButton } from "../styled";
import { makeStyles, Typography } from "@material-ui/core";
import { auth } from "../firebase";

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSignUp = () => {
    auth.signOut();
    history.push("/login");
    
  };

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Typography variant="h3" style={{ marginTop: "100px" }}>
          Edit profile
        </Typography>
        <div className={classes.info}>
          <img src={NetflixAvatar} alt="logo" />
          <div className={classes.content}>
            <Typography variant="h4">Plans</Typography>
            <div className={classes.plans}>
              <Plans cost={7.99}>Netflix Standard</Plans>
              <Plans cost={11.99}>Netflix Basic</Plans>
              <Plans cost={15.99}>Netflix Premium</Plans>
              <NetflixButton wide="large" onClick={handleSignUp}>
                SIGN OUT
              </NetflixButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    maxWidth: "800px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  info: {
    display: "flex",
    width: "80%",
    marginTop: "10%",
    "& img": {
      width: "100px",
      height: "100px",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  },
  content: {
    width: "100%",
    margin: "0px 20px",
    "& h4": {
      borderBottom: "1px solid #fff",
    },
  },
  plans: {
    width: "100%",
  },
}));

export default Profile;
