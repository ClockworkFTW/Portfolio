import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchStatistics } from "./reducers/statistics";

import { GlobalStyle } from "./components/Common";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Portfolio from "./routes/Portfolio";
import Statistics from "./routes/Statistics";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  const { data } = useSelector((state) => state.statistics);

  return (
    <Router>
      <GlobalStyle />
      <Loader />
      {data ? (
        <>
          <Header />
          <Switch>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/">
              <Portfolio />
            </Route>
          </Switch>
        </>
      ) : null}
    </Router>
  );
};

export default App;
