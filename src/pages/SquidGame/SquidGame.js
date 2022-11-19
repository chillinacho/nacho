import React from "react";
import * as CommonStyled from "../../constants/Common.style";
import { Header } from "../../components";
import squidGame001 from "../../assets/images/squidGame/squidGame001.png";
import squidGame002 from "../../assets/images/squidGame/squidGame002.png";
import squidGame003 from "../../assets/images/squidGame/squidGame003.png";

const SquidGame = () => {
  const title = "Squid Game-website";
  return (
    <div>
      <Header title={title} />
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={squidGame001} alt="squidGame001" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={squidGame002} alt="squidGame002" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={squidGame003} alt="squidGame003" />
      </CommonStyled.ImageBox>
      <p>
        You can move forward by clicking on the glass plate with the mouse. good
        luck to you!
      </p>
      <span>Tools : blender, javascript, threejs</span>
      <br />
      <br />
      <a href="https://chillinacho.github.io/squidGame/">link</a>
    </div>
  );
};

export default SquidGame;
