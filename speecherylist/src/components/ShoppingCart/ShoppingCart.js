import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

import useStyles from "./styles/styles.js";

const ShoppingCart = () => {
  const classes = useStyles();

  return (
    <Card
      className={classes.price}
      style={{
        height: "75vh",
        marginLeft: "3vw",
        background: "rgba(255,255,255, 0.1)",
        padding: "1.5em",
        borderRadius: "0.375rem",
        position: "relative",
        zIndex: "1",
        backgroundFilter: "blur(40px)",
        border: "solid 2px transparent",
        backgroundClip: "padding-box",
        boxShadow: "10px 10px 10px rgba(46,54,68,0.03)",
        color: "white",
      }}
    >
      <CardHeader
        title="Shopping List"
        align="center"
        style={{ color: "orange" }}
      />
      <CardContent title="">
        <Typography variant="subtitle1" style={{ lineHeight: "1.5rem" }}>
          Add articles to shopping list by saying them out loud
        </Typography>
        <Typography align="center" variant="h5">
          20 €
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShoppingCart;
