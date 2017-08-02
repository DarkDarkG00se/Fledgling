import React, { Component } from 'react';
export default class imageboxes extends Component {
  render() {
    return (
      <div className="col-md-3 portfolio-item">
        <a href={this.props.link}>
          <img className="img-responsive" src={this.props.picture} alt="" />
        </a>
        <p>
          {' '}{this.props.text}{' '}
        </p>
      </div>
    );
  }
}
