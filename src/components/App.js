import React from "react";
import SpeakerList from "./SpeakerList";
import Info from "./Info";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../style/style.css";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={SpeakerList} />
            <Route path="/:info_id" component={Info} />
          </Switch>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
