import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Media, Container, Row, Col } from 'reactstrap';

import sectionMessages from 'data/sections/messages';
import { SECTION_PUBLICATIONS as SECTION} from 'data/sections';

import messages from './messages';
import items from 'data/sections/publications';
import './styles.scss';

const Publications = (props) => (
  <div id={SECTION.id}>
    <h1 className="title">
      <i className={'fas ' + SECTION.icon} />
      <FormattedMessage {...sectionMessages[SECTION.id]} />
    </h1>
    <Container>
      <Row>
      {items.map( item => (
        <Col key={item.id} xs={12} sm={12} md={6} lg={6}>
          <Media>
            <Media left>
              <div className="image-container">
                <button className="preview">
                  <Media object src={item.image} alt={item.id} />
                </button>
              </div>
              <FormattedDate
                value={ new Date(item.date.year, item.date.month) }
                year='numeric'
                month='short'
              />
              <Media heading>
                <FormattedMessage {...messages[item.id+'-title'] } />
              </Media>
            </Media>
            <Media body>
              <Media className="subtitle">
                <FormattedMessage {...messages[item.id + '-description'] } />
              </Media>
              <FormattedMessage {...messages[item.id + '-text'] } />
              <Media href={item.url} target="_blank" rel="noopener noreferrer">
                <FormattedMessage {...messages.visit } />
              </Media>
            </Media>
          </Media>
        </Col>
      ))}
      </Row>
    </Container>
  </div>
);

export default Publications;