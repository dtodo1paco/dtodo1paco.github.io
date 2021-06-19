import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { NavLink } from 'reactstrap';

const Title = (props) => (
  <div className="title">
    <h1>Paco Alías</h1>
    <h2>Fullstack Senior Software Architect & Engineer</h2>
    <p className="font-italic text-justify">
      <FormattedMessage {...messages.intro} />
      <NavLink id="more" className="d-print-none" href="#0">
        <FormattedMessage {...messages.read_more} />
      </NavLink>
    </p>
  </div>
);
export default Title;