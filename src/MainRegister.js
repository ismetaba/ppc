import React from 'react';
import Header from "./Header.js"

import Main3 from "./Main3.js"
import Footer from "./Footer.js"

import Modal1 from "./Modal1.js"

class MainRegister extends React.Component{

  render(){
    return(
      <>
      <main id="myContainer" className="MainContainer">
        <Header active={'register'}/>
        <Main3 />
        <Footer />
      </main>
      <Modal1 />
      </>
    )
  }
}

export default MainRegister
