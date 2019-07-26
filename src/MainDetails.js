import React from 'react';

import Header from "./Header.js"
import Main2 from "./Main2.js"

import Modal1 from "./Modal1.js"



class MainDetails extends React.Component{


    constructor(){
      super();
      this.state={
      }
    }

  render(){
    return(
      <>
      <main id="myContainer" className="MainContainer">
        <Header active={'discover'}/>
        <Main2 id={this.props.match.params.id}/>
      </main>
      <Modal1 />
      </>
    )
  }
}

export default MainDetails
