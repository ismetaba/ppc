import React from 'react';


class  SubComments extends React.Component{

  constructor(){
    super();
    this.state={
    }
  }

  render(){

    return(
          <>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <hr/><br/>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
            <img src="./../../subCmt.png" width="40" height="40" alt="-"></img>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
            <img className ="avatar-cmd" src={this.props.img} alt="Avatar" />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ">
            <p className="cmd-name">{this.props.name}</p>
            <p className="cmd-reply">{this.props.comment}</p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <br/>
          </div>
          </>
    )
  }
}

export default SubComments
