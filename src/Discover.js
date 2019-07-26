import React from 'react';

import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"

import Modal1 from "./Modal1.js"
import Modal22 from "./Modal22.js"


class Discover extends React.Component{
  constructor(){
    super();
    this.state={
      modal: [],
      id: 0,
      cardDetail:[],
      detailId:0
    }
  }

  onCardClick(popUpId){
    this.setState({ id:popUpId });
    const _this = this;
    var request = new Request('http://localhost:3000/api/get-details-info/' + popUpId,{
        method: 'GET',
        headers: {'Content-Type': 'application/json' }
    });
    fetch(request)
      .then(function(response){
        response.json()
          .then(function(data){
            _this.setState({ cardDetail: data.data[0] })
          })
      });
  }

  render(){
    let searchKey='0';
    let pageNum='1';
    if(this.props.match.params.searchKey!==undefined) {
      searchKey=this.props.match.params.searchKey;
    }if(this.props.match.params.pageNum!==undefined) {
      pageNum=this.props.match.params.pageNum;
    }

    return(
      <>
      <main id="myContainer" className="MainContainer">
        <Header active={'discover'}/>
        <Main pageNum={pageNum} searchKey={searchKey} cardPopUp={this.onCardClick.bind(this)}/>
        <Footer />
      </main>
      <Modal1 />
      <Modal22 cardDetail={this.state.cardDetail}  details={this.props.details}/>
      </>
    )
  }
}

export default Discover
