# React HOC OutsideClick
A Higher Order Component wrapper to provide click outside functionality to the components

[![npm version](https://badge.fury.io/js/react-hoc-outside-click.svg)](https://badge.fury.io/js/react-hoc-outside-click)

### How to use

1. Import `ClickOutside` component
2. Wrap your main component with the `ClickOutside`
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
