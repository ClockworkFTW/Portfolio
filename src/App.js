import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getStats } from "./services/stats";

import { GlobalStyle } from "./components/Common";
import Header from "./components/Header";
import Portfolio from "./routes/Portfolio";
import Statistics from "./routes/Statistics";

const App = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getStats(setStats);
  }, []);

  return stats ? (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="/">
          <Portfolio stats={stats} />
        </Route>
      </Switch>
    </Router>
  ) : (
    <h1>LOADING</h1>
  );
};

export default App;
