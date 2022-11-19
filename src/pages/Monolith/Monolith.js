import React from "react";
import { Header } from "../../components";
import * as CommonStyled from "../../constants/Common.style";
import monolith001 from "../../assets/images/monolith/monolith001.png";
import monolith002 from "../../assets/images/monolith/monolith002.png";
import monolith003 from "../../assets/images/monolith/monolith003.png";

const Monolith = () => {
  const title = "Monolith-website";
  return (
    <div>
      <Header title={title} />
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={monolith001} alt="monolith001" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={monolith002} alt="monolith002" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={monolith003} alt="monolith003" />
      </CommonStyled.ImageBox>
      <p>Getting into the center of the motherboard by scrolling.</p>
      <p>Broken concrete, Motherboard</p>
      <span>Tools : blender, javascript</span>
      <br />
      <br />
      <a href="https://chillinacho.github.io/monolith/">link</a>
      <span> : You need to wait a bit for loading.</span>
    </div>
  );
};

export default Monolith;
