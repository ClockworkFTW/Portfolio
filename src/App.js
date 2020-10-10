import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchStatistics } from "./reducers/statistics";

import { GlobalStyle } from "./components/Common";
import Header from "./components/Header";
import Portfolio from "./routes/Portfolio";
import Statistics from "./routes/Statistics";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  const { pending, data, error } = useSelector((state) => state.statistics);

  return data ? (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/statistics">
          <Statistics stats={data} />
        </Route>
        <Route path="/">
          <Portfolio stats={data} />
        </Route>
      </Switch>
    </Router>
  ) : (
    <h1>LOADING</h1>
  );
};

export default App;
