import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home/Home";
import NoMatch from "./components/pages/NoMatch";
import Profile from "./components/pages/Profile/Profile";
import Create from "./components/pages/CreatePost";
import Filter from "./components/pages/FilterPosts/FilterPosts";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Authentication from "./components/pages/Authentication/Authentication";
import UserContext from "./utils/UserContext";

const App = () => {

  const [userState, setUserState] = useState("ready");
  const [user, setUser] = useState({
    id: "",
    email: ""
  });

  useEffect(() => {
    setUserState("loading...");
    API.getCurrentUser()
      .then(result => {
        const { id, email } = result.data.userData;
        setUserState("resolved");
        setUser({ id, email });
      });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/signup">
            <Authentication />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* <Route exact path="/login">
            <BundtCake setUser={setUser} />
          </Route> */}
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact path="/create">
            <Create />
          </PrivateRoute>
          <PrivateRoute exact path="/filter">
            <Filter />
          </PrivateRoute>
          <PrivateRoute>
            <NoMatch />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;