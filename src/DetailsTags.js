import React from 'react';

class  Tags extends React.Component{
  constructor(){
    super();
    this.state={
    }
  }

  render(){
    return(
      <span className="tags-bar">{this.props.name}</span>
    )
  }
}

export default Tags
