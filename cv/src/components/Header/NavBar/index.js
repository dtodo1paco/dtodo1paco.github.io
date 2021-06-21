import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Media,
    DropdownMenu, DropdownItem, DropdownToggle,
    UncontrolledDropdown,
    } from 'reactstrap';
import portrait from 'images/dtodo1paco.png';
import sections from 'data/sections/index';
import sectionMessages from 'data/sections/messages';
import languages from 'data/languages';
import messages from 'components/Header/messages';
import './styles.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.state = {
      isOpen: false,
      opacity: (props.opacity) ? Math.max(props.opacity, 0.2) : 0,
      borderBottomWidth: (props.opacity === 1) ? props.borderBottomWidth : 0,
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      opacity: (nextProps.opacity) ? Math.max(nextProps.opacity, 0.2) : 0,
      borderBottomWidth: (nextProps.opacity === 1) ? nextProps.borderBottomWidth : 0,
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  navigateTo(url) {
    window.location = url + window.location.hash;
  }

  render() {
    const { opacity, borderBottomWidth, isOpen } = this.state;
    const { activeTab, toggleTab, currentLocale } = this.props;
    if (opacity === 0) return null;
    return (
      <Navbar id="top-nav-bar" color="light" light expand="md" sticky="top" style={{ opacity, borderBottomWidth }}>
        <NavbarBrand  tag="div">
          <Media>
            <Media left>
              <Media src={portrait} />
            </Media>
            <Media className="branding-header">
              <Media heading>
                <div id="left">Paco Alías</div>
                <NavLink
                    id="download"
                    href={'/cv/build/download/paco_alias_'+currentLocale+'.pdf'}
                >
                  <i className="fas fa-file-download"></i>
                </NavLink>
              </Media>
              <Media className="subtitle">
                <div className="typewriter">
                  <span>Fullstack Senior Software Architect &amp; Engineer</span>
                </div>
              </Media>
            </Media>
          </Media>
        </NavbarBrand>
        <UncontrolledDropdown>
          <DropdownToggle caret>
            {currentLocale}
          </DropdownToggle>
          <DropdownMenu>
            {languages.map( lang => (
              <DropdownItem
                key={lang.id}
                disabled={currentLocale === lang.id}
                onClick={() => this.navigateTo(lang.url)}
              >
                <FormattedMessage {...messages[lang.name]} />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {
            sections.map((item, pos) =>
              <NavItem key={pos}>
                <NavLink
                  className={classnames({ active: activeTab === (pos+1).toString() })}
                  onClick={() => { this.toggle(); toggleTab((pos+1).toString()); }}
                  href={'#'+(pos+1)}
                >
                  <i className={'fas ' + item.icon} />
                  <FormattedMessage {...sectionMessages[item.id]} />
                </NavLink>
              </NavItem>
            )
          }
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
};
export default NavBar;
