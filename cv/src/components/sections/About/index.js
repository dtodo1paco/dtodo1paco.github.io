import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import sectionMessages from 'data/sections/messages';
import { SECTION_ABOUT as SECTION } from 'data/sections';
const About = (props) => (
  <div id={ SECTION.id }>
    <h1 className="title">
      <i className={'fas ' + SECTION.icon} />
      <FormattedMessage {...sectionMessages[SECTION.id]} />
    </h1>
    <div className="text">
      <FormattedMessage {...messages.p1} />
      <FormattedMessage {...messages.p2} />
      <FormattedMessage {...messages.p3} />
      <FormattedMessage {...messages.p4} />
      <FormattedMessage {...messages.p5} />
    </div>
  </div>
);

export default About;