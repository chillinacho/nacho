import React from "react";
import { Header } from "../../components";
import * as CommonStyled from "../../constants/Common.style";
import wanderer001 from "../../assets/images/wanderer/wanderer001.png";
import wanderer002 from "../../assets/images/wanderer/wanderer002.png";

const Wanderer = () => {
  const title = "Wanderer-website";
  return (
    <div>
      <Header title={title} />
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={wanderer001} alt="wanderer001" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={wanderer002} alt="wanderer002" />
      </CommonStyled.ImageBox>
      <p>
        You can move around the map with a mouse click. If you enter the yellow
        area, a building will pop out.
      </p>
      <span>Tools : blender, javascript, threejs</span>
      <br />
      <br />
      <a href="https://chillinacho.github.io/wanderer/">link</a>
    </div>
  );
};

export default Wanderer;
