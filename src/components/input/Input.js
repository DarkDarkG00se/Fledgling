import React, { PureComponent } from 'react';

// import { _postData } from '../../API';
import fire from '../../fire';

const database = fire.database();
export default class Input extends PureComponent {
  state = {
    href: '',
    imgSrc: '',
    text: ''
  };

  render() {
    return (
      <div className="container portfolio-form ">
        <div className="col-lg-12">
          <div className="form-group row">
            <label>Href</label>
            <input className="form-control" onChange={this._handleInput} autoComplete="on" type="text" name="href" />
          </div>
          <div className="form-group row">
            <label>Image Source</label>
            <input className="form-control" onChange={this._handleInput} autoComplete="on" type="text" name="imgSrc" />
          </div>
          <div className="form-group row">
            <label>Paragraph text</label>
            <input className="form-control" onChange={this._handleInput} autoComplete="on" type="text" name="text" />
          </div>
          <div className="form-group row">
            <button onClick={this._handleAddItem} className="btn btn-primary">
              add item
            </button>
          </div>
        </div>
      </div>
    );
  }

  _handleInput = event => {
    console.log('input event: ', event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  _handleAddItem = event => {
    if (this.state.imgSrc === false) {
      return null;
    }

    this._postData(event, this.state);
  };

  _postData = (event, state) => {
    event.preventDefault();
    database.ref('ImageItems').push(state);
  };
}
