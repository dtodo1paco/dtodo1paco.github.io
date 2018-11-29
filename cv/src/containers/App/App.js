import React, { Component } from 'react';
import { injectIntl } from "react-intl";

import Header from 'components/Header';
import NavBar from 'components/Header/NavBar';
import Content from 'containers/Content';
import Footer from 'components/Footer';

import BP, { BP_XXS } from './breakpoints'
import './App.css';

const NAVBAR_HEIGHT = 50; // Bootstrap default
const SIZE_TO_SEE_TITLE = -(NAVBAR_HEIGHT + 10);
const SIZE_TO_SEE_TITLE_SPECIAL = -(NAVBAR_HEIGHT + 110);

class App extends Component {
  static defaultProps = {
    bottomBorderWidth: 2,
    fadeInDistance: 40,
  };

  constructor(props) {
    super(props);
    this.state = {
      navOpacity: 0,
      activeTab: '0',
    };
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
    this.updateHeaderSize = this.updateHeaderSize.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOpacity);
    window.addEventListener('resize', this.updateHeaderSize);
    this.updateHeaderSize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOpacity);
    window.removeEventListener('resize', this.updateHeaderSize);
  }

  updateHeaderSize() {
    const { headerHeight } = this.state;
    let width = window.innerWidth;
    let newHeaderHeight = BP.find( pair =>
      width <= pair.width
    ).height;
    console.log("size: " + width +" x " + newHeaderHeight);
    if (newHeaderHeight !== headerHeight) {
      console.log("changing height size to : " + newHeaderHeight + " by width: " + width);
      this.setState({
        headerHeight: newHeaderHeight,
        headerWidth: window.innerWidth,
      });
    }
  }

  updateNavOpacity() {
    const { bottomBorderWidth, fadeInDistance } = this.props;
    const { headerHeight } = this.state;
    const endFade = headerHeight - NAVBAR_HEIGHT - bottomBorderWidth;
    const startFade = endFade - fadeInDistance;
    const scrolly = window.scrollY;

    if (scrolly < startFade) {
      if (this.state.navOpacity === 0) return;
      this.setState({ navOpacity: 0 });
      return;
    }

    if (scrolly > endFade) {
      if (this.state.navOpacity === 1) return;
      this.setState({ navOpacity: 1 });
      return;
    }

    const pxPastStartFade = scrolly - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity });
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    const tabIndex = parseInt(tab);
    let tab_limit = 7;
    if (window.innerWidth < BP_XXS) {
      tab_limit = 8;
    }
    if (tabIndex < tab_limit) {
      let size = SIZE_TO_SEE_TITLE;
      if (tabIndex > 3 && tabIndex < 5) {
        size = SIZE_TO_SEE_TITLE_SPECIAL
        if (window.innerWidth < BP_XXS) {
          size = size - 20;
        }
      }
      setTimeout(() => {window.scrollBy(0, size)}, 0);
    }
  }

  render() {
    const { headerHeight, headerWidth, navOpacity, activeTab } = this.state;
    const { locale } = this.props;
    return (
      <div>
        <NavBar
            currentLocale={locale}
            opacity={ navOpacity }
            borderBottomWidth={ this.props.bottomBorderWidth }
            toggleTab={this.toggleTab}
            activeTab={activeTab}
        />
        <Header
            locale={locale}
            width={ headerWidth }
            height={ headerHeight }
            borderBottomWidth={ this.props.bottomBorderWidth }
            toggleTab={this.toggleTab}
            activeTab={activeTab}
        />
        <div id="0">
          <Content activeTab={activeTab}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default injectIntl(App);
