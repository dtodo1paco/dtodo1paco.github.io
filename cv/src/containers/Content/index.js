import React from 'react';
import './styles.css';

import About from 'components/sections/About';
import Skills from 'components/sections/Skills';
import Portfolio from 'components/sections/Portfolio';
import Timeline from 'components/sections/Timeline';
import FurtherTraining from 'components/sections/FurtherTraining';
import Publications from 'components/sections/Publications';
import VolunteerWork from 'components/sections/VolunteerWork';
import Interests from 'components/sections/Interests';

const Content = (props) => (
  <div className="content" id="content">
    <div className="row">
      <div className="col-md-12">
        <div id="1">
          <Skills />
        </div>
        <div id="2">
          <About />
        </div>
        <div id="3">
          <Portfolio />
        </div>
        <div id="timeline">
          <Timeline />
        </div>
        <div id="6">
          <FurtherTraining />
        </div>
        <div id="7">
          <Publications />
        </div>
        <div id="8">
          <VolunteerWork />
        </div>
        <div id="9">
          <Interests />
        </div>
      </div>
    </div>
  </div>
);

export default Content;