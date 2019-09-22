import React from 'react';
import './styles/App.scss';
import Book from './components/Book';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      height: 0
    }
  }

  componentDidMount(){
  }

  render(){
    return (
      <div className="App" style={{height: this.state.height}}>
        <Book setHeight={val => this.setState({height: val})} />
      </div>
    );
  }
}

export default App;
