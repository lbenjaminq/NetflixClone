import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Pages/Profile";
import Paypal from "./Pages/Paypal";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProfileManage from "./Components/ProfileManager/ProfileManage";
import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./Redux/UserSlice";
import { useSelector } from "react-redux";

function App() {
  const classes = useStyles();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    //El observable al que se suscribe representa el estado del usuario autenticado. El valor de user es un objeto User que contiene los datos del usuario que ha iniciado sesión o null si nadie está conectado. Este observer se ejecuta cada vez que alguien inicia o cierra sesión.
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("user", userAuth);
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
    return unsubscribe; // retorna los valores del usuario si esta conectado o null si no esta conectado
  }, []);

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/manage"}>
            <ProfileManage />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
          <Route path={"/checkout"}>
            <Paypal />
          </Route>
          <Route exact path={"/"}>
            <Home />
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
    fontFamily:"Helvetica"
  },
}));

export default App;
