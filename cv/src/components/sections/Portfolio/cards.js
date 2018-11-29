import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge,
    Nav, NavItem, NavLink, Collapse
    } from 'reactstrap';
import './cards.scss';

class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: new Array(props.items.length).fill(false)
    }
  }

  toggle(position) {
    const newOpenedState = [...this.state.isOpen];
    newOpenedState[position] = !newOpenedState[position];
    this.setState({ isOpen: newOpenedState });
  }

  render () {
    const { messages, items } = this.props;
    const { isOpen } = this.state;
    const cards = items.map( (item, i) => {
      const card = (
        <Card>
          <CardTitle><FormattedMessage {...messages[item.title]} /></CardTitle>
          <div id="image-container">
            <CardImg top src={item.image} className="preview" alt={item.title} />
          </div>
          <CardBody>
            <CardSubtitle>
              { item.tags.map (tag => (<Badge key={tag} color="secondary">{tag}</Badge>))}
              <Nav>
                <NavItem>
                  <NavLink href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={item.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#' onClick={() => this.toggle(i)} className="d-print-none color-info">
                    {!isOpen[i] && <i className="fas fa-plus"></i>}
                    {isOpen[i] && <i className="fas fa-minus"></i>}
                  </NavLink>
                </NavItem>
              </Nav>
            </CardSubtitle>
            <Collapse isOpen={isOpen[i]}>
              <CardText><FormattedMessage {...messages[item.description]} /></CardText>
            </Collapse>
          </CardBody>
        </Card>
      );
      return <div key={item.title} className="col-auto cardCol">
        {card}
      </div>

    });
    return (
      <div className="container portfolio-cards">
        <div className="row">
          {cards}
        </div>
      </div>
    )
  }
}

export default Cards;