
import React from 'react';
import MiniCard from './MiniCard.js'

class  MainCard extends React.Component{

  constructor(){
    super();
    this.state={
      pageNum: 0,
      result: [],
      popUp:[]

    }
    this.pageDown = this.pageDown.bind(this);
    this.pageUp = this.pageUp.bind(this);
  }

  componentDidMount(){
    var request;
    if(this.props.searchKey===undefined){
    request = new Request('http://localhost:3000/api/get-info/'+ (this.props.pageNum)   ,{
        method: 'GET',
        headers: new Headers({'Get-Info':'application/json'})
    });
  }else {
    request = new Request('http://localhost:3000/api/get-info/'+ (this.props.pageNum) + '/' + (this.props.searchKey)  ,{
        method: 'GET',
        headers: new Headers({'Get-Info':'application/json'})
    });
  }
    const _this = this;
    fetch(request)
      .then(function(response){
        response.json()
          .then(function(data){
            _this.setState({result: data.data})
            _this.setState({pageSize: (data.data.length/9)-0.1})

          })
      })
  }

  redirect(){
    var pageNum=document.getElementById("redirect");
    if(pageNum.value !== "" && pageNum.value>0) window.location="./" + pageNum.value ;
  }

  pageDown(){
    if(this.props.pageNum!==1){
      let page='integer';
      page=parseInt(this.props.pageNum, 10 );
      window.location="./" + (page-1) ;
    }
  }

  pageUp(){
    if(this.state.result.length>9){
      let page='integer';
      page=parseInt(this.props.pageNum, 10 );
      window.location="./" + (page+1) ;
    }
  }

  render(){

    const cardComponents = this.state.result.slice(0, 9).map((card) => <MiniCard  cardPopUp={this.props.cardPopUp} modal={this.props.modal} key={card.id} id={card.id} status={card.status} src={card.img1} title={card.title} text={card.cardtext} owner={card.authorname} arrtags={card.arrtags} time={card.time} likecounter={card.likecounter} view={card.view} />);
    let message1;
    let message2;
    let message3;
    let page='integer';
    page=parseInt(this.props.pageNum, 10 );
    message2=<li className="page-item "><a className="page-link current rounded" href={'./'+(page) }>{page}</a></li>
    if(this.props.pageNum!=='1'){
      message1=<li className="page-item "><a className="page-link pale" href={'./'+(page-1) }>{page-1}</a></li>
    }
    if(this.state.result.length>9){
      message3=<li className="page-item "><a className="page-link pale" href={'./'+(page+1) }>{page+1}</a></li>
    }
    return(
      <>
      <div className="cards-main" >
        <div className="row">
          {cardComponents}
        </div>
      </div>
      <nav className="mynavbar3  navbar navbar-expand navbar-light bg-white rounded">
        <div className="collapse navbar-collapse bottom-bar" id="navbarsExample09">
            <div className="col-lg-10 col-md-9 col-sm-6 col-xs-6">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <button className="page-link dark" onClick={this.pageDown} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </button>
                    </li>
                    {message1}
                    {message2}
                    {message3}
                    <li className="page-item">
                      <button className="page-link dark" onClick={this.pageUp} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div className="form-inline my-2 my-md-0 ">
                  <label className="go-to-page-text">Go To&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  <input className="form-control go-to-page" id="redirect" type="text" placeholder="12" aria-label="Search"></input>
                  <button className="page-link dark" onClick={this.redirect} aria-label="Previous">></button>
                </div>
              </div>
            </div>
        </nav>
      </>
    )
  }
}

export default MainCard
