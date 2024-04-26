import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './Css/BaseCss/App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
