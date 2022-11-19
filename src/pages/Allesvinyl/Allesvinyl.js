import React from "react";
import { Header } from "../../components";
import * as CommonStyled from "../../constants/Common.style";
import allesvinyl001 from "../../assets/images/allesvinyl/allesvinyl001.png";
import allesvinyl002 from "../../assets/images/allesvinyl/allesvinyl002.png";
import allesvinyl003 from "../../assets/images/allesvinyl/allesvinyl003.png";
import allesvinyl004 from "../../assets/images/allesvinyl/allesvinyl004.png";
import allesvinyl005 from "../../assets/images/allesvinyl/allesvinyl005.png";
import allesvinyl006 from "../../assets/images/allesvinyl/allesvinyl006.png";

const Allesvinyl = () => {
  const title = "Allesvinyl-website";
  return (
    <div>
      <Header title={title} />
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={allesvinyl001} alt="allesvinyl001" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={allesvinyl002} alt="allesvinyl002" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={allesvinyl003} alt="allesvinyl003" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={allesvinyl004} alt="allesvinyl004" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={allesvinyl005} alt="allesvinyl005" />
      </CommonStyled.ImageBox>
      <CommonStyled.ImageBox>
        <CommonStyled.Image src={allesvinyl006} alt="allesvinyl006" />
      </CommonStyled.ImageBox>
      <p>
        Users can receive a different aesthetic feeling from previous vinyl
        sites while reading music-related news that responds to scrolling on the
        first main page, and can also obtain new information. In the shop page
        implemented using three js, users can feel the fun as if they were
        shopping in a real vinyl shop.
      </p>
      <p>A vinyl that follows the cursor, 3d space for vinyl shopping</p>
      <span>Tools : php, javascript, threejs</span>
    </div>
  );
};

export default Allesvinyl;
