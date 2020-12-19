import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchPortfolio } from "./reducers/portfolio";
import { fetchStatistics } from "./reducers/statistics";
import { fetchCalendar } from "./reducers/calendar";

import { GlobalStyle } from "./components/Common";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Portfolio from "./routes/Portfolio";
import Statistics from "./routes/Statistics";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolio());
    dispatch(fetchStatistics());
    dispatch(fetchCalendar());
  }, [dispatch]);

  const portfolio = useSelector((state) => state.portfolio.data);
  const statistics = useSelector((state) => state.statistics.data);
  const calendar = useSelector((state) => state.calendar.data);

  const render = portfolio && statistics && calendar;

  return (
    <Router>
      <GlobalStyle />
      {render ? (
        <>
          <Header />
          <Switch>
            <Route path="/statistics">
              <Statistics calendar={calendar} />
            </Route>
            <Route path="/">
              <Portfolio statistics={statistics} />
            </Route>
          </Switch>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </Router>
  );
};

export default App;
