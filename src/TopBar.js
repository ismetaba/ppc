import React from 'react';

class  TopBar extends React.Component{

  search(e){
    if (e.which === 13) {
      window.location="/home/"+ e.target.value + "/1";
    }
  }

  render(){
    let tag1="nav-item";
    let tag2="nav-item";
    let tag3="nav-item";
    let tag4="nav-item";
    if(this.props.searchKey!==undefined){
      if(this.props.searchKey==='automative') tag1="nav-item active";
      else if(this.props.searchKey==='manufacturing') tag2="nav-item active";
      else if(this.props.searchKey==='healthcare') tag3="nav-item active";
    }else {
      tag4="nav-item active";
    }
    return(
      <nav className="mynavbar1 navbar navbar-expand-lg navbar-light rounded">
        <div className="collapse navbar-collapse " id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className={tag4}>
              <a className="nav-link" href="/home/1">All&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </li>
            <li className={tag1}>
              <a className="nav-link " href="/home/automative/1">Automative</a>
            </li>
            <li className={tag2}>
              <a className="nav-link " href="/home/manufacturing/1">Manufacturing</a>
            </li>
            <li className={tag3}>
              <a className="nav-link" href="/home/healthcare/1">Healthcare</a>
            </li>
          </ul>
          <div className="form-inline my-2 my-md-0">
            <span className="dot2"></span>
            <div className="form-group input-group">
            <input className="form-control mysearchbox" onKeyDown={this.search}  type="text" placeholder="Search..." aria-label="Search"></input>
            <div className="input-group-prepend">
                <i className="fas fa-search"></i>
             </div>
          </div>
          <i className="fas fa-sort-amount-up fa-lg"></i>
          <p className="myfilter">Filter</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default TopBar
