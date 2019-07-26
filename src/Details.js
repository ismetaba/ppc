import React from 'react';
import DetailsTags from './DetailsTags.js';


class  Details extends React.Component{

  constructor(){
    super();
    this.state={
    }
  }

  render(){

    let tags = this.props.cardDetail.arrtags ? this.props.cardDetail.arrtags.map((tagName) => <DetailsTags key={tagName} name={tagName} />) : [];

    let cardStatus;
    if(this.props.cardDetail.status==='new project') cardStatus="new-project status-pop-up"
    else if(this.props.cardDetail.status==='solved') cardStatus="solved status-pop-up"
    else if(this.props.cardDetail.status==='unsolved') cardStatus="unsolved status-pop-up"

    return(
      <div className="container asdx" >
        <div className="row main-header">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 " >
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 " >
                <img className="img-1" src={this.props.cardDetail.img1}  alt="" />
              </div>
              <div className="col-lg-3 col-md-12 col-sm-6 col-xs-6 sum-img-2" >
                <img className="img-2 rounded" src={this.props.cardDetail.img2} alt="" />
                <img className="img-3 rounded" src={this.props.cardDetail.img2} alt="" />
                <img className="img-4 rounded" src={this.props.cardDetail.img3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <div className="card-info-1">
                <h5 className="title-1">Price forecast <i className="far fa-bookmark fa-sm"></i></h5>
              </div>
              <div className="card-info-2">
                <span className={cardStatus}><p className="status-bar-text ">{this.props.cardDetail.status}</p></span>
                <i className="far fa-thumbs-up fa-thumbs-up-3"> {this.props.cardDetail.likecounter}</i>
                <i className="far fa-eye fa-eye-3"> {this.props.cardDetail.view}</i>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <p>Industry<span className="description">:&nbsp; &nbsp;&nbsp;&nbsp;{this.props.cardDetail.industry}</span></p>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <p>Tags <span className="dp">:</span>{tags}</p>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <p className="pdf"><i className="far fa-file-pdf fa-2x"> 300 series catalog</i><i className="far fa-file-pdf fa-2x"> 300 series catalog</i> </p>
            </div>
          </div>
        </div>
      </div>
        <div >
          <p className="description">{this.props.cardDetail.domain}</p>
          <br/>
          <p className="description">{this.props.cardDetail.problem}</p>
          <br/><br/>
          <p className="description">{this.props.cardDetail.impact}</p>
          <br/>
          <p className="description">{this.props.cardDetail.stateofart}</p>
          <br/>
        </div>
        <div className="row bg">
          <div className="col-lg-2 col-md-3 col-sm-2 col-xs-12 ">
            <img className ="avatar"src={this.props.cardDetail.authorimg} alt="Avatar" />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-8 col-xs-12 ">
            <p className="author-1">AUTHOR</p>
            <p className="author-2">{this.props.cardDetail.authorname}</p>
            <p className="author-3">{this.props.cardDetail.authorinfo}</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <p>Follow me</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <p></p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <p>My website</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <p>website.com</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Details
