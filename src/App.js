import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import ProfileManage from "./Components/ProfileManager/ProfileManage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./Redux/UserSlice";
import { auth } from "./firebase";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path={"/login"}>
            <SignUp />
          </Route>
          <Route exact path={"/manage"}>
            <ProfileManage />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
          <Route exact path={"/home"}>
            <Home />
          </Route>
          <Route exact path={"/"}>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#141414",
    minHeight: "100vh",
    fontFamily: "Helvetica",
  },
}));

export default App;
