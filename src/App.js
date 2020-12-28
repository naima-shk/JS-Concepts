import './App.css';
import React ,{Component} from 'react';
import Navbar from './Component/Navbar';
import Block from './Component/Block';

class App extends Component{
  render(){
  return (
    <div>
      <Navbar/>
      <Block/>
    
    </div>
      );
}
}

export default App;
