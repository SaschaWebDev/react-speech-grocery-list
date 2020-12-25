import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";

import ArticleItem from "./ArticleItem/ArticleItem";

const Articles = (props) => {
  return (
    <Card
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
        title="Grocery Items"
        align="center"
        style={{ color: "orange" }}
      />
      <CardContent title="">
        {/* <Typography align="center" variant="h5">
          20 €
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5rem", marginTop: "20px" }}
        >
          Add articles to shopping list by saying them out loud
        </Typography> */}
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ marginTop: "5vh" }}
        >
          {props.dbItemList.map((item) => (
            <ArticleItem name={item.name} price={item.price} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Articles;
