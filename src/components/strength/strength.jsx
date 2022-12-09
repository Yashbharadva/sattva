import React, { useState, useEffect } from "react";

import "./strength.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

import DEVDATA from "../../devDATA";

function OurStrength() {

  useEffect(() => {
    AOS.init();
  }, []);

  const [data] = useState(DEVDATA);

  return (
    <div>
      <div className="u-align-center u-clearfix u-grey-10 u-section-5">
        <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
          <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
            <div className="u-repeater u-repeater-1">

              {/* GRID PART */}

              {data.map((item) => {
                return (
                  <div>
                    <div className="u-align-center u-container-style u-list-item u-radius-25 u-repeater-item u-shape-round u-white u-list-item-1 animated customAnimationIn-played">
                      <div className="u-container-layout u-similar-container u-container-layout-1">
                        <img className="u-expanded-width u-image u-image-round u-radius-20 u-image-1 animated customAnimationIn-played"
                          src={item.image} />
                        <p className="u-align-left u-text u-text-grey-30 u-text-1">{item.post}</p>
                        <h3 className="u-align-left u-custom-font u-font-raleway u-text u-text-default u-text-palette-3-base u-text-2">{item.name}</h3>
                        <p className="u-align-left u-text u-text-body-color u-text-3">{item.description}</p>
                        <div className="u-align-left u-social-icons u-spacing-30 u-social-icons-1">

                          <a className="u-social-url" target="_blank" href="#">
                            <span className="u-file-icon u-icon u-social-facebook u-social-icon u-text-palette-3-base">
                              <img src={item.imageUrl} />
                            </span>
                          </a>
                          <a className="u-social-url" target="_blank" href="#">
                            <span className="u-file-icon u-icon u-social-facebook u-social-icon u-text-palette-3-base">
                              <img src={item.imageUrl} />
                            </span>
                          </a>
                          <a className="u-social-url" target="_blank" href="#">
                            <span className="u-file-icon u-icon u-social-facebook u-social-icon u-text-palette-3-base">
                              <img src={item.imageUrl} />
                            </span>
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>

          <div className="u-align-left u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-palette-3-base u-radius-25 u-shape-round u-group-1 animated customAnimationIn-played">
            <div className="u-container-layout u-valign-middle u-container-layout-5">
              <span className="u-file-icon u-icon u-text-black u-icon-13">
                <img src="data:image/png;base64,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" />
              </span>
              <h3 className="u-text u-text-default u-text-13">Our Team</h3>
              <p className="u-large-text u-text u-text-variant u-text-14">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="u-active-white u-border-2 u-border-active-palette-3-base u-border-black u-border-hover-palette-3-base u-btn u-btn-round u-button-style u-hover-white u-none u-radius-20 u-text-active-palette-3-base u-text-hover-palette-3-base u-text-palette-5-dark-3 u-btn-1">Learn more</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurStrength;