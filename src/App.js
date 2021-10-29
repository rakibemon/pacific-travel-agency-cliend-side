import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Context/AuthProvider';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserInfo from './components/UserInfo/UserInfo';
import MyBooking from './components/MyBooking/MyBooking';
import ManageAllBooking from './components/ManageAllBooking/ManageAllBooking';

function App() {
  return (
    <div className="App">
 <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header/>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path='/home'>
              <Header/>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path='/login'>
              <Header/>
              <Login/>
              <Footer></Footer>
            </Route>
            <PrivateRoute exact path='/mybooking'>
              <Header/>
              <MyBooking/>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path='/manageallbooking'>
              <Header/>
              <ManageAllBooking/>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path='/destination/:userid'>
              <Header/>
              <UserInfo/>
              <Footer></Footer>
            </PrivateRoute>
            
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
