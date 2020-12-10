import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Movie from "../routes/Movie";
import Search from "../routes/Search";
import TV from "../routes/TV";
import Detail from "../routes/Detail";

// 오직 라우터만 관리하는 컴포넌트가 될 것임.
export default () => (
  <Router>
    <>
      <Header />
      {/* 기본적으로 Switch가 없이 라우터를 배치하면 모든 라우터를 탄다.
      Switch를 활용하묜 오로지 하나의 라우터만 타게 된다. */}
      <Switch>
        <Route path="/movie" exact component={Movie} />
        <Route path="/search" exact component={Search} />
        <Route path="/tv" exact component={TV} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/show/:id" exact component={Detail} />
      </Switch>
    </>
  </Router>
);
