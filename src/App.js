import React from 'react';
import './styles/App.scss';
import Book from './components/Book';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }


  render(){
    
    return (
      <div className="App ">
        <Book/>
      </div>
    );
  }
}

export default App;
