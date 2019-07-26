import React from 'react';

class  BottomBar extends React.Component{

    constructor(){
      super();
      this.state={
        pageNum: 0
      }
      this.pageDown = this.pageDown.bind(this)
      this.pageUp = this.pageUp.bind(this)
    }

  pageDown(){
    this.setState( prevState =>{
      return{
          pageNum: prevState.pageNum - 1
      }
    })
  }

  pageUp(){
    this.setState( prevState =>{
      return{
          pageNum: prevState.pageNum + 1
      }
    })
  }

  render(){

    const pageNum=this.state.pageNum;
    const pageSize=this.props.pageSize;
    let message1;
    let message2;
    let message3;

    if(pageNum==0){
      message1=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum+1} </a></li>;
      if(pageSize > (pageNum+2) )message2=<li  className="nav-item active"><a className="nav-link" href="#"> {pageNum+2} </a></li>;
      if(pageSize > (pageNum+3) ) message3=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum+3} </a></li>;
    }else{
      if(pageSize>pageNum+1 ){
        message1=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum} </a></li>;
        message2=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum+1} </a></li>;
        if (pageSize>pageNum+2){
          message3=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum+2} </a></li>;
        }else{
          message1=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum-1} </a></li>;
          message2=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum} </a></li>;
          message3=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum+1} </a></li>;
        }
      }else {
        message1=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum} </a></li>;
        message2=<li className="nav-item active"><a className="nav-link" href="#"> {pageNum+1} </a></li>;
      }
    }

    return(
      <nav className="mynavbar3  navbar navbar-expand navbar-light bg-light rounded">
        <div className="collapse navbar-collapse bottom-bar" id="navbarsExample09">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <a className="nav-link" onClick={this.pageDown}>{'<'}</a>
            </li>
            {message1}
            {message2}
            {message3}
            <li className="nav-item active">
              <a className="nav-link" onClick={this.pageUp}>></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0 ">
            <label>Go To&nbsp;&nbsp;&nbsp;&nbsp;</label><input className="form-control" type="text" placeholder="12" aria-label="Search"></input>
            <span className="nav-link" href="#">></span>
          </form>
        </div>
      </nav>

    )
  }
}
export default BottomBar
