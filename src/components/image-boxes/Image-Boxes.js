import React, { Component } from 'react';
export default class imageboxes extends Component {
  render() {
    return (
      <div className="col-md-3 portfolio-item">
        <a href="/">
          <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
        </a>
      </div>
    );
  }
}
