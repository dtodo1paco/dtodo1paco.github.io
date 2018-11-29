import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Media, Nav, NavItem, NavLink,
    Collapse
} from 'reactstrap';
import './carousel.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isOpen: new Array(props.items.length).fill(false),
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  toggle(position) {
    const newOpenedState = [...this.state.isOpen];
    newOpenedState[position] = !newOpenedState[position];
    this.setState({isOpen: newOpenedState});
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const { items } = this.props;
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const { items } = this.props;
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render () {
    const { activeIndex, isOpen } = this.state;
    const { messages, items } = this.props;
    const slides = items.map( (item, i) => {
      return (
          <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.title}
              className="item-card"
          >
            <h2 className="d-inline-flex">
              <FormattedMessage {...messages[item.title]} />
              <Nav>
                <NavItem>
                  <NavLink href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={item.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#' onClick={() => this.toggle(i)} className="d-print-none hidden-xs-up color-info">
                      {!isOpen[i] && <i className="fas fa-plus"></i>}
                      {isOpen[i] && <i className="fas fa-minus"></i>}
                  </NavLink>
                </NavItem>
              </Nav>
              <Collapse isOpen={isOpen[i]} className="d-print-block">
                <FormattedMessage {...messages[item.description]} />
              </Collapse>
            </h2>
            <Media>
              <Media left>
                <Media object src={item.image} className="summary-image" />
              </Media>
              <Media body className="hidden-xxs">
                <FormattedMessage {...messages[item.description]} />
              </Media>
            </Media>
          </CarouselItem>
      );
    });
    return (
      <Carousel className="portfolio-carousel"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          keyboard={true}
          interval={5000000}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    )
  }
}

export default Portfolio;