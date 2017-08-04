import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fire from '../../fire';
const database = fire.database();
export default class imageboxes extends Component {
  static propTypes = {
    href: PropTypes.string,
    ItemID: PropTypes.string,
    imgSrc: PropTypes.string,
    text: PropTypes.string
  };
  render() {
    return (
      <div className="col-md-3 portfolio-item">
        <a href={this.props.link}>
          <img className="img-responsive" src={this.props.picture} alt="" />
        </a>
        <p>
          {this.props.text}
        </p>
        <button className="btn btn-danger" onClick={this._handleDeleteItem}>
          Delete Image
        </button>
      </div>
    );
  }
  _handleDeleteItem = event => {
    const { itemID } = this.props;

    /*
Down below is soemhting to use for debugging. Code in between 'try' and
catch is what the program willrun and if there is somehting wrong, they'll express an error
*/
    try {
      database.ref('ImageItems').child(itemID).remove();
    } catch (error) {
      console.log('error', error);
    }
  };
}
