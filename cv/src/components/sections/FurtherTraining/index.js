import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Table, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import items from 'data/sections/furtherTraining';
import { SECTION_FURTHER_TRAINING as SECTION } from 'data/sections';

import './styles.scss';
import messages from './messages';
import sectionMessages from 'data/sections/messages';


class FurtherTraining extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10, // by default, last 10 further trainings are shown
    }
  }

  render() {
    const { pageSize } = this.state;
    const lastCourses = items.slice(0, pageSize);
    return (
        <div id={SECTION.id}>
          <div className="title-header">
            <h1 className="title">
              <i className={'fas ' + SECTION.icon} />
              <FormattedMessage {...sectionMessages[SECTION.id] } />
            </h1>
            <UncontrolledDropdown>
              <DropdownToggle caret>
                {pageSize}
              </DropdownToggle>
              <DropdownMenu>
                {[5, 10,20,30].map( size => (
                  <DropdownItem
                    key={size}
                    disabled={size === pageSize}
                    onClick={() => this.setState({pageSize: size})}
                  >
                    {size}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <Table borderless striped hover size="sm">
            <thead>
              <tr>
                <th>
                  <FormattedMessage {...messages.year } />
                </th>
                <th>
                  <FormattedMessage {...messages.course } />
                </th>
                <th>
                  <FormattedMessage {...messages.length } />
                </th>
              </tr>
            </thead>
            <tbody>
          {lastCourses.map(item => (
              <tr key={item.id}>
                <td>{item.year}</td>
                <td className="course-info">
                  <div className="course-title">
                    <FormattedMessage {...messages[item.id] } />
                  </div>
                  <div className="course-location">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.location}
                    </a>
                  </div>
                </td>
                <td>{item.length}</td>
              </tr>
          ))}
            </tbody>
          </Table>
        </div>
    )
  }
};

export default FurtherTraining;