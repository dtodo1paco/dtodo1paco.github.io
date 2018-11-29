import React from 'react';
import { FormattedMessage } from 'react-intl';
import { UncontrolledTooltip, Container, Row, Col, Badge } from 'reactstrap';

import sectionMessages from 'data/sections/messages';
import { SECTION_INTERESTS as SECTION } from 'data/sections';
import items from 'data/sections/interests'
import messages from './messages';
import './styles.scss';

const Interests = (props) => (
  <div id={SECTION.id}>
    <h1 className="title">
      <i className={'fas ' + SECTION.icon} />
      <FormattedMessage {...sectionMessages[SECTION.id]} />
    </h1>
    <Container>
      <Row>
      {
        items.sort(function(a, b){return 0.5 - Math.random()}).map( item => (
          <Col xs={6} sm={4} md={3} lg={3} key={item.id}>
            <h2>
              <Badge color="info" id={'interests-tooltip-' + item.id}>
                <FormattedMessage {...messages[item.id + '-title']} />
              </Badge>
            </h2>
            <UncontrolledTooltip placement="auto" target={'interests-tooltip-' + item.id} className="hidden-print">
              <FormattedMessage {...messages[item.id+'-description']} />
            </UncontrolledTooltip>
            <div className="visible-print-inline">
              <FormattedMessage {...messages[item.id+'-description']} />
            </div>
          </Col>
        ))
      }
      </Row>
    </Container>
  </div>
);

export default Interests;