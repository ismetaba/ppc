import React from 'react';

class  Tags extends React.Component{
  constructor(){
    super();
    this.state={
    }
  }

  render(){

    let div1='';
    if(this.props.mini===undefined){
      div1=<div className="chip">{this.props.name}</div>;
    }else{
      div1=this.props.name + ' ';
    }

    return(
      <>
        {div1}
      </>
    )
  }
}

export default Tags
