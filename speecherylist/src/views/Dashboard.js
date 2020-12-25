import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import ShoppingCart from "../components/ShoppingCart/ShoppingCart.js";
import Articles from "../components/Articles/Articles.js";

const Dashboard = () => {
  const [totalSum, setTotalSum] = useState(0);
  const [itemList, setItemList] = useState([
    { name: "Bread", price: 2.99 },
    { name: "Milk", price: 3.99 },
  ]);
  const [dbItemList, setDbItemList] = useState([
    { name: "Bread", price: 2.99 },
    { name: "Milk", price: 3.99 },
    { name: "Cheese", price: 4.99 },
    { name: "Cereal", price: 1.99 },
    { name: "Tomato", price: 0.99 },
    { name: "Apple", price: 1.5 },
  ]);

  /*   useEffect(() => {
    // Update the document title using the browser API
  }); */

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
          <Articles dbItemList={dbItemList} />
        </Grid>
        <Grid item xs={5} sm={2}>
          <ShoppingCart totalSum={totalSum} itemList={itemList} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
