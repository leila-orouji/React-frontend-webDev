import React from 'react';
import Main from './components/mainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';



class App extends React.Component {

  static getDerivedStateFromProps(){
    console.log('derived state')
  }

  shouldComponentUpdate (){
    console.log('sHould COmponent update App')
    return true;
  }
  render(){
    console.log('render')
    return(  
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    )
  }

  getSnapshotBeforeUpdate(){
    console.log('GEt Snap Shot App');
  }

  componentDidUpdate(){
    console.log('Component Did Update App');
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
}

export default App;
