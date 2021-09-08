import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./login/login";
import ChatRoom from "./chat-room/chatRoom";

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/chat-room">
            <ChatRoom />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
