import React, { Component } from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Badge, Collapse } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import sectionMessages from 'data/sections/messages';
import {
    SECTION_EDUCATION as S_EDUCATION, SECTION_ID_EDUCATION,
    SECTION_WORK_EXPERIENCE as S_WORK_EXPERIENCE, SECTION_ID_WORK_EXPERIENCE
    } from 'data/sections';
import { getDuration } from 'util/dates';

import items from 'data/sections/timeline';
import messages from './messages';
import './styles.scss';

const icon_style = {};
icon_style[SECTION_ID_WORK_EXPERIENCE] = { background: '#337ab7', color: '#fff' };
icon_style[SECTION_ID_EDUCATION] = { background: 'rgb(243, 150, 33)', color: '#fff' };

const icons = {};
icons[SECTION_ID_WORK_EXPERIENCE] = <i className="far fa-2x fa-building"></i>;
icons[SECTION_ID_EDUCATION] = <i className="fas icon fa-2x fa-graduation-cap"></i>;
icons['location'] = <i className="fas fa-map-marker-alt"></i>;
icons['link'] = <i className="fas fa-external-link-alt"></i>


class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: new Array(items.length).fill(false)
    }
  }

  toggle(position) {
    const newOpenedState = [...this.state.isOpen];
    newOpenedState[position] = !newOpenedState[position];
    this.setState({isOpen: newOpenedState});
  }

  render() {
    const { isOpen } = this.state;
    let educationDivCreated = false;
    let workDivCreated = false;
    return (
      <div id="timeline">
        <h1 className="title">
          <i className={'fas ' + S_WORK_EXPERIENCE.icon} />
          <FormattedMessage {...sectionMessages[S_WORK_EXPERIENCE.id]} />
            <span className="separator">&</span>
          <i className={'fas ' + S_EDUCATION.icon} />
          <FormattedMessage {...sectionMessages[S_EDUCATION.id]} />
        </h1>
        <VerticalTimeline>
        {
          items.map((item, i) => {
            const d_joined = new Date(item.date_join.year, item.date_join.month);
            const d_left = item.date_leave !== null
                ? new Date(item.date_leave.year, item.date_leave.month)
                : new Date();
            const duration = getDuration(d_joined, d_left);
            const element = (
              <VerticalTimelineElement
                key={item.title}
                className="vertical-timeline-element--work"
                date={
                  <div>
                    <FormattedDate
                        value={ d_joined }
                        year='numeric'
                        month='short'
                    />
                    <span> ... </span>
                    {
                    item.date_leave !== null &&
                      <FormattedDate
                        value={d_left}
                        year='numeric'
                        month='short'
                      />
                    }
                    {
                    item.date_leave === null &&
                      <FormattedMessage {...messages.present} />
                    }
                  </div>
                }
                iconStyle={icon_style[item.type]}
                icon={icons[item.type]}
              >
              <h3 className="vertical-timeline-element-title">
                <span className="title">
                  <FormattedMessage {...messages[item.title]} />
                </span>
                {
                item.type === 'work' &&
                  <Badge color="info" className="duration">
                    { duration.years > 0 && <span className="duration-years">{duration.years} <FormattedMessage {...messages.years} /></span> }
                    { duration.months } <FormattedMessage {...messages.months} />
                  </Badge>
                }
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.company_url
                  && <a href={item.company_url} target="_blank" rel="noopener noreferrer" className="color-plain">
                      {icons.link}
                    </a>
                }
                <FormattedMessage {...messages[item.company]} />
                {icons.location}{item.subtitle}
              </h4>
              <div className="tags">
                { item.tags.map(tag => (<Badge key={tag} color="secondary">{tag}</Badge>))}
                <Badge color="info" onClick={() => this.toggle(i)} className="d-print-none">
                    {!isOpen[i] && <i className="fas fa-plus"></i>}
                    {isOpen[i] && <i className="fas fa-minus"></i>}
                </Badge>
              </div>
              <Collapse isOpen={isOpen[i]} className="d-print-block">
                <p>
                  <FormattedMessage {...messages[item.description]} />
                </p>
              </Collapse>
            </VerticalTimelineElement>
            );
            if (!educationDivCreated && item.type === S_EDUCATION.id) {
              educationDivCreated = true;
              return <div key={S_EDUCATION.id} id={S_EDUCATION.pos}>{element}</div>;
            }
            if (!workDivCreated && item.type === S_WORK_EXPERIENCE.id) {
              workDivCreated  = true;
              return <div key={S_WORK_EXPERIENCE.id} id={S_WORK_EXPERIENCE.pos}>{element}</div>;
            }
            return element;
          })}
        </VerticalTimeline>
      </div>
    );
  }
};

export default Timeline;