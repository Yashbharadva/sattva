import React, { useState, useEffect } from "react";
import "./details.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import GRID_DATA from "../../gridData";

function Details() {

  useEffect(() => {
    AOS.init();
  }, []);

  const [items] = useState(GRID_DATA);

  return (
    <div style={{ padding: "5rem" }}>
      <div className="details-main">
        {items.map((item) => {
            return (
              <div>
                <div className="fetch-item">
                  <div className="collections" data-aos="fade-up">
                    {/* <img className="web-logo" src={webLogo} /> */}
                    <h2>{item.title}</h2>
                    <span>{item.description}</span>
                    {/* <img src={item.imageUrl} /> */}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Details;