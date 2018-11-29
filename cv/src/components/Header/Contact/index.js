import React from 'react';
import { ListGroup, ListGroupItem, Nav, NavItem, NavLink } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import languages from 'data/languages';
import messages from '../messages';
import { agesAgo } from 'util/dates.js';
const years = agesAgo(2000);
const Contact = (props) => (
    <ListGroup className="contact">
      <ListGroupItem>
        <i className="fas fa-clock"></i>
        <span>{years}</span>
        <FormattedMessage {...messages.years_working} />
      </ListGroupItem>
      <ListGroupItem>
        <i className="fa fa-wheelchair"></i><span>40%</span>
        <FormattedMessage {...messages.disability_1} />
        <small className="">
          <FormattedMessage {...messages.disability_2} />
        </small>
      </ListGroupItem>
      <ListGroupItem><i className="fas fa-map-marker-alt"></i><span>Málaga, ES</span></ListGroupItem>
      <ListGroupItem><i className="fas fa-envelope"></i><span>dtodo1paco[at]gmail.com</span></ListGroupItem>
      <ListGroupItem>
        <Nav className="lang">
          <i className="fas fa-language"></i>
          {languages.map( lang => (
            <NavItem key={lang.id}>
              <NavLink href={lang.url}>
                <FormattedMessage {...messages[lang.name]} />
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </ListGroupItem>
    </ListGroup>
);
export default Contact;