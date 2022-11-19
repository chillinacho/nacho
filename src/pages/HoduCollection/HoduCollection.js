import React from "react";
import { Header } from "../../components";
import * as CommonStyled from "../../constants/Common.style";
import hodu001 from "../../assets/images/hodu/hodu001.png";
import hodu002 from "../../assets/images/hodu/hodu002.png";

const HoduCollection = () => {
  const title = "HoduCollection-website";
  return (
    <div>
      <Header title={title} />
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={hodu001} alt="hodu001" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={hodu002} alt="hodu002" />
      </CommonStyled.ImageBox>
      <p>Pictures of Hodu looking sphere or random</p>
      <span>Tools : javascript, threejs</span>
      <br />
      <br />
      <a href="https://chillinacho.github.io/hoduCollection/">link</a>
    </div>
  );
};

export default HoduCollection;
