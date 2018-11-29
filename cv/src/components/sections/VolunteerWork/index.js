import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Media, Container, Row, Col } from 'reactstrap';

import sectionMessages from 'data/sections/messages';
import { SECTION_VOLUNTEER_WORK as SECTION } from 'data/sections';
import items from 'data/sections/volunteerWork'
import messages from './messages';
import './styles.scss';

const VolunteerWork = (props) => (
  <div id={SECTION.id}>
    <h1 className="title">
      <i className={'fas ' + SECTION.icon} />
      <FormattedMessage {...sectionMessages[SECTION.id]} />
    </h1>
    <Container>
      {items.map( item => (
      <Row key={item.id} >
        <Col xs={12} sm={12} md={12} lg={12}>
          <Media>
            <Media body>
              <Media heading>
                <FormattedMessage {...messages[item.id+'-title'] } />
              </Media>
              <FormattedMessage {...messages[item.id + '-description'] } />
              <Media href={item.url} target="_blank" rel="noopener noreferrer">
                <FormattedMessage {...messages.visit } />
              </Media>
            </Media>
          </Media>
        </Col>
      </Row>
      ))}
    </Container>
  </div>
);

export default VolunteerWork;