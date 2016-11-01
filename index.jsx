import React, { Component, PropTypes } from 'react';

function clickOutside(WrappedComponent) {
  return class ClickOutside extends Component {
    static displayName = `ClickOutside(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    static propTypes = {
      onClickOutside: PropTypes.func.isRequired
    };

    componentDidMount() {
      window.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
      window.removeEventListener('click', this.handleClickOutside, true);
    }

    wrappedComponent;

    handleClickOutside = (event) => {
      const { onClickOutside } = this.props;
      const element = this.wrappedComponent;
      if (!element.contains(event.target)) {
        onClickOutside(event);
      }
    };

    render() {
      return <div ref={(ref) => { this.wrappedComponent = ref; }} ><WrappedComponent {...this.props} /></div>;
    }
  };
}

export default clickOutside;
