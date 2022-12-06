import React, { useState } from "react";
import "./details.css";
import GRID_DATA from "../../gridData";

function Details() {

  const [items] = useState(GRID_DATA);

  return (
    <div>
      <div className="details-main">
        {
          items.map((item) => {
            return (
              <div>
                <div className="fetch-item">
                  <h2>{item.title}</h2>
                  <div>
                    </div>
                  <h2>{item.description}</h2>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Details;