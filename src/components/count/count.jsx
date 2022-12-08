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
    <div style={{ padding: "5rem" }}>
      <div>
        <p data-aos="flip-up">Some common synonyms of assess are appraise, estimate, evaluate, rate, and value.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        <div data-aos="flip-down">
          <h1>
            <CountUp
              start={0}
              end={100}
              duration={5}
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            />+
          </h1>
          <p>asdjghksajgjg</p>
        </div>
        <div data-aos="flip-up">
          <h1>
            <CountUp
              start={5}
              end={100}
              duration={8}
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            />+
          </h1>
          <p>kjhl</p>
        </div>
        <div data-aos="flip-down">
          <h1>
            <CountUp
              start={10}
              end={100}
              duration={6}
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            />+
          </h1>
          <p>asdsad</p>
        </div>
        <div data-aos="flip-up">
          <h1>
            <CountUp
              start={20}
              end={100}
              duration={10}
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            />+
          </h1>
          <p>cbcv</p>
        </div>
      </div>
    </div>
  )
}

export default Count;