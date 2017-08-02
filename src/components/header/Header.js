import React, { Component } from 'react';
export default class Header extends Component {
  // props being passed in: headerText

  render() {
    const headerText = this.props.headerText;

    return (
      <h1 className="page-header">
        {headerText}
      </h1>
    );
  }
}
