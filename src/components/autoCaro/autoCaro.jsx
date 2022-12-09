import React, { useState } from "react";
import Carousel from 'react-elastic-carousel';
import "./autoCaro.css";
import AUTO_DATA from "../../autoDATA";

function AutoCaro() {
  const breakPoints = [{
    width: 1, itemsToShow: 5
  }];

  const [images] = useState(AUTO_DATA);

  return(
    <div>
      <div>
      <h2 className="u-text u-text-default-lg u-text-default-xl u-text-1">Our Work</h2>
      </div>
      <div className="spacetop">

        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>
      {
        images.map((img) => {
          return(
              <div className="auto">
                <img src={img.imageUrl} width="200px" height="100px" />
              </div>
          )
        })
      }
      </Carousel>
      </div>
    </div>
  )
}

export default AutoCaro;