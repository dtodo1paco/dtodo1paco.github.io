import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Progress, Badge, UncontrolledTooltip } from 'reactstrap';
import { SECTION_SKILLS as SECTION } from 'data/sections';
import { expertise, skills, devSkills, engSkills } from 'data/sections/skills';
import sectionMessages from 'data/sections/messages';
import './styles.scss';
import messages from './messages';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: new Array(skills.length).fill(false)
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(position) {
    const newOpenedState = [...this.state.isOpen];
    newOpenedState[position] = !newOpenedState[position];
    this.setState({isOpen: newOpenedState});
  }

  render() {
    return (
      <div id={ SECTION.id }>
        <h1 className="title">
          <i className={'fas ' + SECTION.icon} />
          <FormattedMessage {...sectionMessages[SECTION.id]} />
        </h1>
        <Container fluid>
          <Row className="low-padding-cols">
            <Col xs="12">
              <Progress multi>
                <Progress bar color="light" value="59" className="text-dark">Software development</Progress>
                <Progress bar color="dark" value="41">Software engineering</Progress>
              </Progress>
            </Col>
            <Col xs="7">
              <Progress multi>
                {
                  devSkills.map( (skill, i) => {
                    const id = `devSkills-${i}`;
                    return (
                      <>
                      <Progress key={skill.name} bar 
                        color={id}
                        value={skill.value}
                      >
                        <span id={id}>
                          {skill.name}
                        </span>
                      </Progress>
                      <UncontrolledTooltip className="hidden-print" placement="auto" target={id}>
                        <FormattedMessage {...messages[skill.desc]} />
                      </UncontrolledTooltip>
                      </>
                    )
                  })
                }
              </Progress>
            </Col>
            <Col xs="5">
              <Progress multi>
              {
                  engSkills.map( (skill, i) => {
                    const id = `engSkills-${i}`;
                    return (
                      <>
                      <Progress key={skill.name} bar 
                        color={id}
                        value={skill.value}
                      >
                        <span id={id}>
                          {skill.name}
                        </span>
                      </Progress>
                      <UncontrolledTooltip className="hidden-print" placement="auto" target={id}>
                        <FormattedMessage {...messages[skill.desc]} />
                      </UncontrolledTooltip>
                      </>
                    )
                  })
                }
              </Progress>
            </Col>
          </Row>
          <Row>
      {
          expertise.map((group, i) => {
            const items = group.reduce((list, item) => {
              list.push(
                  <span id={`skills-column-${i}`} className="text" key={item.text}>
                    <span className={'skill-item skill-weight-' + item.weight}>{item.text}</span>
                  </span>
              );
              return list;
            }, []);
            const lastColumn = i === expertise.length - 1;
            if (lastColumn) {
              return (
                <Col xs="8" sm="auto" md="auto" key={i}>
                  {items}
                </Col>
              );
            } else {
              return (
                <Col xs="4" sm="4" md="2" lg="1" xl="1" key={i}>
                  {items}
                </Col>
              );
            }
          })
          }
          </Row>
          <Row className="print-grid">

          {
              skills.sort(function(a, b){return 0.5 - Math.random()}).map( item => (
                <Col xs={6} sm={4} md={3} lg={2} key={item.text} className="print-as-row">
                  <h2 id={'skillTooltip'+item.text}>
                    <Badge color="success" id={'skills-tooltip-' + item.text}>
                      <FormattedMessage {...messages[item.text]} />
                    </Badge>
                  </h2>
                  <div className="visible-print-inline">
                    <FormattedMessage {...messages[item.text+'-desc']} />
                  </div>
                  <UncontrolledTooltip className="hidden-print" placement="auto" target={'skillTooltip' + item.text}>
                    <FormattedMessage {...messages[item.text+'-desc']} />
                  </UncontrolledTooltip>
                </Col>
              ))
              }
          </Row>
        </Container>
      </div>
  )
  }
}

export default Skills;