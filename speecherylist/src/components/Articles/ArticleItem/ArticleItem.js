import React from "react";
import { Grid } from "@material-ui/core";
import Goo from "gooey-react";

import "../styles/styles.css";

const ArticleItem = (props) => {
  /* const [rotation, setRotation] = useState(0); */

  /* useEffect(() => {}); */

  return (
    <Grid
      item
      xs={12}
      sm={4}
      align="center"
      style={{
        paddingLeft: "1vw",
        paddingRight: "1vw",
        height: "5rem",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          width: "50%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "5px",
        }}
      >
        <div
          className="blob"
          style={{
            margin: "auto",
            display: "block",
            position: "relative",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            transition: "all ease 1s",
            boxShadow: "0 0 0 1px rgba(0,0,0,0)",
            transitionPropery: "border-radius, transform",
            transitionDuration: "1s 1s",
            minWidth: "40%",
          }}
        >
          <div
            className="image"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "400px",
              height: "400px",
              transform: "translate(-50%, -50%) rotate(var(--r, 0deg))",
              backgroundColor: "#3f3d56",
              backgroundImage:
                "url(https://github.com/Shadow-Scientist/BlobMaker/raw/master/assets/hero.png)",
              backgroundPosition: "center",
              backgroundSize: "100px auto",
            }}
          ></div>
        </div>
        <div style={{ minWidth: "50%", margin: "auto" }}>
          <div style={{ color: "black" }}>{props.name}</div>
          <div style={{ color: "green" }}>{props.price}</div>
        </div>
      </div>
    </Grid>
  );
};

export default ArticleItem;
