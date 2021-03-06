import { Box, Grid, Container, Button } from "@material-ui/core";
import React, { Component } from "react";

import "./Random.scss";

function Priz() {
  return (
    <Container className={"random"}>
      <img src="./images/bg2.svg" className={"randomBG randomBGback"} />
      <img src="./images/bg3.svg" className={"randomBGtop randomBG"} />
      <Container className={"randomScreen"}>
        <img src="./images/video-1.png" className={"randomVideo"} />
        <h2 className={"randomText"}>загадывай фильм и жми пуск!</h2>
        <Button className={"buttonVideo"}>
          <img src="./images/buttonPlay.png" />
        </Button>

        <img src="./images/video-2.png" className={"randomVideo"} />
      </Container>
    </Container>
  );
}

export default Priz;
