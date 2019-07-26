import React from 'react';
import TopBar from './TopBar.js'
import MainCard from './MainCard.js'

class  Main extends React.Component{
  constructor(){
    super();
    this.state={
    }
  }

  render(){

    var pageNum=this.props.pageNum;

    return(
        <div className="container main-block">
          <TopBar searchKey={this.props.searchKey}/>
          <MainCard pageNum={pageNum} searchKey={this.props.searchKey} cardPopUp={this.props.cardPopUp}/>
        </div>
    )
  }
}

export default Main
