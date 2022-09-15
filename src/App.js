import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from './Pages/Profile'
import Paypal from './Pages/Paypal'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { makeStyles } from '@material-ui/core'

function App() {
  const classes = useStyles()
  const user = 'pepe'

  return (
    <div className={classes.root}>
      <Router>

        <Switch>
          {
            user ? (<Login/>):(
              <Switch>
                <Route path={'/profile'}>
                  <Profile/>
                </Route>
                <Route path={'/checkout'}>
                  <Paypal/>
                </Route>
                <Route path={'/'}>
                  <Home/>
                </Route>
              </Switch>
            )
          }
        </Switch>

      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme)=>({
  root:{
    backgroundColor:'#fff',
    minHeight:'100vh'
  }
}))

export default App;
