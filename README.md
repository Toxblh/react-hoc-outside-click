# React HOC OutsideClick
A Higher Order Component wrapper to provide click outside functionality to the components

[![Latest Stable Version](https://img.shields.io/npm/v/react-hoc-outside-click.svg)](https://www.npmjs.com/package/react-hoc-outside-click)
[![License](https://img.shields.io/npm/l/react-hoc-outside-click.svg)](https://www.npmjs.com/package/react-hoc-outside-click)
[![NPM Downloads](https://img.shields.io/npm/dt/react-hoc-outside-click.svg)](https://www.npmjs.com/package/react-hoc-outside-click)

### How to use

1. Import `clickOutside` component
2. Wrap your main component with function the `clickOutside`
3. Provide an `onClickOutside` callback.

### Example


```js
import React from 'react';
/* Any component, which will be set onClickOutside */
import Modal from 'modal/Modal';
import clickOutside from 'react-hoc-outside-click';

class AnyComponent extends Component {
  state = {
    isOpened: false
  }

  handleClickOutside() {
    this.setState({ isOpened: false });
  },

  render() {
    const wrapClickDiv = clickOutside(Modal);
    return (
      <wrapClickDiv onClickOutside={this.handleClickOutside}>
        Any content
      </wrapClickDiv>
    )
  },
});

export default AnyComponent;

  ```

### Options:

| Name        | Description | Required |        
| ------------- |-------------| --- |
| onClickOutside    | function that is called when a click happened outside of the component  |  yes |


### License

MIT
