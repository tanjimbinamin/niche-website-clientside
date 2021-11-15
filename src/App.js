import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Banner from './Components/Banner/Banner';
import Extrasec from './Components/Extrasec/Extrasec';
import Service from './Components/Service/Service';
import Explore from './Components/Explore/Explore';
import Dashboard from './Components/Dashboard/Dashboard';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Placeorder from './Components/PlaceOrder/Placeorder';
import Review from './Components/Review/Review';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Banner></Banner>
            <Extrasec></Extrasec>
            <Service></Service>
            <Review></Review>
          </Route>
          <Route  path='/home'>
            <Banner></Banner>
            <Extrasec></Extrasec>
            <Service></Service>
            <Review></Review>
          </Route>
          <PrivateRoute path='/explore'>
            <Explore></Explore>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/service/:id'>
            <Placeorder></Placeorder>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  
  );
}

export default App;
