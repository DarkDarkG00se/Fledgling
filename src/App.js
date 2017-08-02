import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar/Nav-bar';
import Boxes from './components/image-boxes/Image-Boxes';
import Header from './components/header/Header';

const dataArray = [
  { href: 'ddd', imgScr: 'path', text: 'paragraph text' },
  { href: 'ddd', imgScr: 'path', text: 'paragraph text' },
  { href: 'ddd', imgScr: 'path', text: 'paragraph text' },
  { href: 'ddd', imgScr: 'path', text: 'paragraph text' }
];

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Header />
            </div>
          </div>

          <div className="row">
            {this._renderImageBoxes()}
          </div>

          <hr />
          <div className="row text-center">
            <div className="col-lg-12">
              <ul className="pagination">
                <li>
                  <a href="/">&laquo;</a>
                </li>
                <li className="active">
                  <a href="/">1</a>
                </li>
                <li>
                  <a href="/">2</a>
                </li>
                <li>
                  <a href="/">3</a>
                </li>
                <li>
                  <a href="/">4</a>
                </li>
                <li>
                  <a href="/">5</a>
                </li>
                <li>
                  <a href="/">&raquo;</a>
                </li>
              </ul>
            </div>
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

  _renderImageBoxes = () => {
    return dataArray.map(() => <Boxes />);
  };
}

export default App;
