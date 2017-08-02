import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar/Nav-bar';
import Boxes from './components/image-boxes/Image-Boxes';
import Header from './components/header/Header';
import Input from './components/input/Input';
import fire from './fire';

const database = fire.database();

class App extends Component {
  state = {
    ImageItems: []
  };

  componentWillMount() {
    this._listenToCreateEvent();
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Header headerText={'First Heading'} />
            </div>
          </div>

          <div className="row">
            {this._renderImageBoxes()}
          </div>

          <hr />
          <div className="row">
            <Input />
          </div>

          <hr />
          <footer>
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright &copy; Your Website 2014</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  _listenToCreateEvent = () => {
    const ImageItems = database.ref('ImageItems');
    ImageItems.on('child_added', data => {
      const state = this.state.ImageItems;

      const ImageItem = {
        href: data.val().href,
        imgSrc: data.val().imgSrc,
        text: data.val().text,
        key: data.key
      };
      this.setState({
        ImageItems: [ImageItem].concat(state)
      });
    });
  };

  _renderImageBoxes = () => {
    console.log('state', this.state);
    return this.state.ImageItems.map(item => <Boxes link={item.href} picture={item.imgSrc} text={item.text} />);
  };
}

export default App;
