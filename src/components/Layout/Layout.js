import React from "react";
import Aux from "../../hoc/Auxillary";
import "./Layout.css";
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, BackDrowp</div>
    <main className="main">{props.children}</main>
  </Aux>
);

export default layout;
