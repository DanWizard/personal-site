import React from "react";
import Home from "../Home";
import { Background } from "./styles";
import Space from "../../assets/stars2.gif";
import { Switch, Route } from "react-router-dom";
import Footer from "./footer";
import Shop from "../Shop";
import Articles from "../Articles";
import Videos from "../Videos";

const Nav = () => {
  return (
    <Background bg={Space}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/videos" component={Videos} />
      </Switch>
      <Footer />
    </Background>
  );
};

export default Nav;
