import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
export default class PopUpMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button">
          {this.props.name}
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>{this.props.title}</PopoverHeader>
          <PopoverBody>{this.props.body}</PopoverBody>
        </Popover>
      </div>
    );
  }
}
Popover.propTypes = {
  // space separated list of triggers (e.g. "click hover focus")
  trigger: PropTypes.string,
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  // boundaries for popper, can be scrollParent, window, viewport, or any DOM element
  boundariesElement: PropTypes.oneOfType([PropTypes.string]),
  target:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
   // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
  ]).isRequired,
  // Where to inject the popper DOM node, default to body
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  // Apply class to the inner-popover
  innerClassName: PropTypes.string,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
  ]),
  // Custom modifiers that are passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
