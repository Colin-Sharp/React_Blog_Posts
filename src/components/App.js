import React from "react";
import PostList from "./PostList";
import Post from "./Post";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../style/style.css";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
