import React from 'react';

import Header from "./Header.js"
import Modal1 from "./Modal1.js"

class Home extends React.Component{

  render(){
    return(
      <>
      <main id="myContainer" className="MainContainer">
        <Header active={'home'}/>
      </main>
      <Modal1 />
      </>
    )
  }
}

export default Home
