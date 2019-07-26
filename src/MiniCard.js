import React from 'react';
import Tags from './Tags.js'
class  Minicard extends React.Component{
  constructor(){
    super();
    this.state={
      cardDetail:[],
      modal: []
    }
    this.pageDown = this.popUp.bind(this);
  }
  popUp(id){
    this.props.cardPopUp(id);
    var container=document.getElementById("myContainer");
    var modal2=document.getElementById("myModal-2");
    var body=document.getElementsByTagName("body");
    var modal3=document.getElementById("myModal-3");
    setTimeout(function(){container.className="MainContainer is-blurred";},100);
    modal3.style.display="block";
    modal2.style.display="block";
    window.onclick = function(e){
      if (e.target === modal2) {
        modal2.style.display="none";
        e.target=modal2&&(modal2.className="Modal",body.className="",container.className="MainContainer",container.parentElement.className="")
      }
    }
  }
render(){
  let cardStatus;
  if(this.props.status==='new project') cardStatus="new-project status-project"
  else if(this.props.status==='solved') cardStatus="solved status-project"
  else if(this.props.status==='unsolved') cardStatus="unsolved status-project"

  let id=this.props.id;
  let tags = this.props.arrtags ? this.props.arrtags.map((tagName) => <Tags key={tagName} name={tagName} mini={'mini'} />) : [];
  return(
        <>
        <div id="card" onClick={this.popUp.bind(this,id)} className="col-lg-4 col-md-6 col-sm-12 col-xs-12 myblog rounded" >
          <div className="card title" >
            <button id={this.props.id} className={cardStatus}>{this.props.status}</button>
            <img className="card-img-top" src={this.props.src} alt=""></img>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.text}</p>
              <p className="card-text"><sup>{this.props.owner} </sup><sup ><span className="asd">{tags}</span></sup></p>
            </div>
            <div className="minibar">
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-6 col-xs-6">
                  <sup className="myicons-1"><i className="far fa-clock"></i>{' ' + this.props.time }</sup>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-6">
                  <sup className="myicons-2">
                    <i className="far fa-thumbs-up"></i> {this.props.likecounter + ' '}
                    <i className="far fa-eye"></i>{this.props.view + ' '}
                    <i className="far fa-bookmark fa-sm"></i>
                  </sup>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
  }
}

export default Minicard
