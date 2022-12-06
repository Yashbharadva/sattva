import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./welcome.css";

function WelcomeMessage() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div class="u-container-layout"
      >
        <h2 class="u-custom-font">Welcome Message</h2>
        <p class="u-text">Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.</p>
        <div class="u-expanded-height"></div>
        <div class="u-expanded-height2"></div>
      </div>
    </div>
  )
}

export default WelcomeMessage;