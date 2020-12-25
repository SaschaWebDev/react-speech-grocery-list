import React from "react";
import { Grid } from "@material-ui/core";

import ShoppingCart from "../components/ShoppingCart/ShoppingCart.js";
import Articles from "../components/Articles/Articles.js";

const Dashboard = () => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={5} sm={9}>
          <Articles />
        </Grid>
        <Grid item xs={5} sm={2}>
          <ShoppingCart />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
