import React, { useEffect } from "react";
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./count.css";

function Count() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    // <div style={{ padding: "5rem" }}>
    //   <div>
    //     <p data-aos="flip-up">Some common synonyms of assess are appraise, estimate, evaluate, rate, and value.</p>
    //   </div>
    //   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
    //     <div data-aos="flip-down">
    //       <h1>
    //         <CountUp
    //           start={0}
    //           end={100}
    //           duration={5}
    //           onEnd={() => console.log('Ended! 👏')}
    //           onStart={() => console.log('Started! 💨')}
    //         />+
    //       </h1>
    //       <p>asdjghksajgjg</p>
    //     </div>
    //     <div data-aos="flip-up">
    //       <h1>
    //         <CountUp
    //           start={5}
    //           end={100}
    //           duration={8}
    //           onEnd={() => console.log('Ended! 👏')}
    //           onStart={() => console.log('Started! 💨')}
    //         />+
    //       </h1>
    //       <p>kjhl</p>
    //     </div>
    //     <div data-aos="flip-down">
    //       <h1>
    //         <CountUp
    //           start={10}
    //           end={100}
    //           duration={6}
    //           onEnd={() => console.log('Ended! 👏')}
    //           onStart={() => console.log('Started! 💨')}
    //         />+
    //       </h1>
    //       <p>asdsad</p>
    //     </div>
    //     <div data-aos="flip-up">
    //       <h1>
    //         <CountUp
    //           start={20}
    //           end={100}
    //           duration={10}
    //           onEnd={() => console.log('Ended! 👏')}
    //           onStart={() => console.log('Started! 💨')}
    //         />+
    //       </h1>
    //       <p>cbcv</p>
    //     </div>
    //   </div>
    // </div>
    <div id="services">
      <div className="u-align-center u-clearfix u-grey-10 u-section-7">
        <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-valign-middle-xs u-sheet-1">
          <h2 data-aos="zoom-in" className="u-text u-text-default-lg u-text-default-xl u-text-1">We are the leaders</h2>
          <p data-aos="zoom-out" className="u-large-text u-text u-text-variant u-text-2"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

          <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/7b41792002e653d393caf40e/vbvbvbvb.jpg" className="u-expanded-width u-image u-image-round u-radius-20 u-image-1 animated fadeInRight-played" />

          <div className="u-list u-list-1">
            <div className="u-repeater u-repeater-1">


              <div data-aos="fade-right" className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1 animated fadeInRight-played">
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                  <p className="u-text u-text-default u-text-grey-60 u-text-3">Awards</p>
                  <h3 className="u-custom-font u-font-montserrat u-text u-text-default u-text-palette-3-base u-text-4">
                    <CountUp
                      start={0}
                      end={100}
                      duration={8}
                      onEnd={() => console.log('Ended! 👏')}
                      onStart={() => console.log('Started! 💨')}
                    />+
                  </h3>
                </div>
              </div>

              <div data-aos="fade-right" className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1 animated fadeInRight-played">
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                  <p className="u-text u-text-default u-text-grey-60 u-text-3">Awards</p>
                  <h3 className="u-custom-font u-font-montserrat u-text u-text-default u-text-palette-3-base u-text-4">
                    <CountUp
                      start={0}
                      end={100}
                      duration={12}
                      onEnd={() => console.log('Ended! 👏')}
                      onStart={() => console.log('Started! 💨')}
                    />+
                  </h3>
                </div>
              </div>

              <div data-aos="fade-left" className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1 animated fadeInRight-played">
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                  <p className="u-text u-text-default u-text-grey-60 u-text-3">Awards</p>
                  <h3 className="u-custom-font u-font-montserrat u-text u-text-default u-text-palette-3-base u-text-4">
                    <CountUp
                      start={0}
                      end={100}
                      duration={15}
                      onEnd={() => console.log('Ended! 👏')}
                      onStart={() => console.log('Started! 💨')}
                    />+
                  </h3>
                </div>
              </div>

              <div data-aos="fade-left" className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1 animated fadeInRight-played">
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                  <p className="u-text u-text-default u-text-grey-60 u-text-3">Awards</p>
                  <h3 className="u-custom-font u-font-montserrat u-text u-text-default u-text-palette-3-base u-text-4">
                    <CountUp
                      start={0}
                      end={100}
                      duration={10}
                      onEnd={() => console.log('Ended! 👏')}
                      onStart={() => console.log('Started! 💨')}
                    />+
                  </h3>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Count;