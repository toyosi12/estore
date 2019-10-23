import React, {Component} from 'react';
import './App.css';
import  './components/assets/bootstrap.min.css';
import Navbar from './components/Navbar';
import Display from './components/Display';
import Categories from './components/Categories';
class App extends Component{

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Display />
        <Categories />
      </React.Fragment>
    );
  }
}

export default App;
