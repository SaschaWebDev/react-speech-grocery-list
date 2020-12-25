import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

import useStyles from "./styles/styles.js";

const Details = () => {
  const classes = useStyles();

  return (
    <Card className={classes.price}>
      <CardHeader title="Artikel" />
      <CardContent title="">
        <Typography align="center" variant="h5">
          20 €
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5rem", marginTop: "20px" }}
        >
          Add articles to shopping list by saying them out loud
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
