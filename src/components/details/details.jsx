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

    <div id="about-us" style={{ paddingTop: "5rem", scrollBehavior: "smooth" }}>
      <div className="u-align-center u-clearfix u-palette-3-base u-section-4">
        <img className="u-expanded-width u-image u-image-default u-image-1"
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
        <div className="u-list u-list-1">
          <div className="u-repeater u-repeater-1">

          {items.map((item) => {
            return(
              <div data-aos="fade-up" className="u-container-style u-list-item u-opacity u-opacity-75 u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1 whole-section">
              <div className="u-container-layout u-similar-container u-valign-bottom-xl u-container-layout-1">
                <span className="u-icon u-icon-circle u-palette-3-base u-spacing-15 u-text-white u-icon-1 animated customAnimationIn-played">

                </span>
                <div className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xs u-container-style u-group u-group-1">
                  <div className="u-container-layout u-valign-top u-container-layout-2">
                    <h4 className="u-text u-text-1">{item.title}</h4>
                    <p className="u-text u-text-grey-40 u-text-2">{item.description}</p>
                    <span className="u-icon u-icon-circle u-text-palette-3-base u-icon-2">
                    </span>
                  </div>
                </div>
              </div>
            </div>
            )
          })}

            

          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;