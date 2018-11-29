import React from 'react';
import { Button, Tooltip } from 'reactstrap';

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpened: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpened: !this.state.tooltipOpened
    });
  }

  render() {
    const { tooltipOpened } = this.state;
    const { id, messages, placement, color, content } = this.props;
    return (
        <span>
          <Badge className="mr-1" color={color} id={'Tooltip-' + id}>
            <FormattedMessage {...messages[id]} />
          </Badge>
          <Tooltip placement={placement} isOpen={tooltipOpened} target={'Tooltip-' + id} toggle={this.toggle}>
            <FormattedMessage {...messages[content]} />
          </Tooltip>
        </span>
    );
  }
}