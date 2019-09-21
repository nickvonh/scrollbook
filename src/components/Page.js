import React from 'react';

class Page extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }


  render(){
    
    return (
      <div className={`Page ${this.props.index}`}>
          <img src={this.props.page}/>
      </div>
    );
  }
}

export default Page;
