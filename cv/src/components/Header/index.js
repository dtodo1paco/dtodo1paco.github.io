import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';

import './styles.css';
import Contact from './Contact';
import Portrait from './Portrait';
import Title from './Title';
import TitleHeader from './Title/Header';
import TitleText from './Title/Text';
import sections from 'data/sections/index';
import sectionMessages from 'data/sections/messages';

const BP_M = 710;
const BP_S = 426;

class Header extends Component {

  render () {
    let content = null;
    const { width, activeTab, toggleTab, borderBottomWidth, height, locale } = this.props;
    if (width > BP_M) {
      content = (
        <Col xs="12" className="person-details person-details-inline">
          <Portrait />
          <Title />
          <Contact />
        </Col>
      );
    } else if (width > BP_S) {
      content = (
        <Col xs="12" className="person-details person-details-contents">
          <Portrait />
          <Contact />
          <Title />
        </Col>
      );
    } else {
     content = (
       <Col xs="12" className="person-details person-details-contents">
        <Portrait />
        <TitleHeader />
        <Contact />
        <TitleText />
       </Col>
     );
    }
    return (
      <div className="header" style={{ height, borderBottomWidth  }}>
        <Container fluid>
          <Row>
            {content}
          </Row>
          <Row id="tabs" className="hidden-xxxs hidden-print">
            <Col md="12" sm="12" xs="12">
              <Nav tabs>
              {
              sections.map((item, pos) =>
                <NavItem key={pos}>
                  <NavLink
                      className={classnames({ active: activeTab === (pos+1).toString() })}
                      onClick={() => { toggleTab((pos+1).toString()); }}
                      href={'#'+(pos+1)}
                  >
                    <FormattedMessage {...sectionMessages[item.id]} />
                  </NavLink>
                </NavItem>
                )
              }
                <NavItem id='download'>
                  <NavLink
                      href={'/cv/build/download/print_'+locale+'.pdf'}
                  >
                    <span className="pdf-icon">
                      <i class="far fa-file-pdf"></i>
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Header;