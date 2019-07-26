import React from 'react';
import SubComments from './SubComments.js';

class  Comments extends React.Component{

  constructor(){
    super();
    this.state={
      subcomments:[]
    }
    this.write = this.write.bind(this);
    this.subReply = this.subReply.bind(this);
  }

  componentDidMount(){

    var request = new Request('http://localhost:3000/api/get-details-subcomments/' + (this.props.id),{
        method: 'GET',
        headers: new Headers({'Get-Info':'application/json'}),
    });
    const _this = this;
    fetch(request)
      .then(function(response){
        response.json()
          .then(function(data){
            _this.setState({ subcomments: data.data })
          })
      })
  }

  write(boxId){
    let subReplyBox=document.getElementById(boxId);
    let data={
      id:this.props.id,
      img:'data:image/png;base64,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',
      name:'Unknown',
      comment:subReplyBox.value
    };
    var request = new Request('http://localhost:3000/api/subcomment',{
        method: 'POST',
        headers: new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(data)
    });
      fetch(request)
        .then(function(response){
          response.json()
            .then(function(data){
              window.location.reload();

            })
        })
  }

  subReply(id){
    let subCommntBox=document.getElementById(id);
     subCommntBox.style.display ="block";
  }

  render(){
    const subCommentComponents = this.state.subcomments.map((subComment) => <SubComments key={subComment.id} id={subComment.id} name={subComment.name} img={subComment.img} comment={subComment.comment} />);
    let boxId= this.props.id + "subReplyBox";
    return(
      <>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
            <img className ="avatar-cmd"src={this.props.img} alt="Avatar" />
          </div>
          <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 ">
            <p className="cmd-name">{this.props.name + ' '}
              <span className="fas fa-reply" onClick={this.subReply.bind(this,this.props.id)}></span>
            </p>
            <p className="cmd-reply">{this.props.comment}</p>
          </div>
          {subCommentComponents}
          <div id={this.props.id} className="subReply col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <textarea id={boxId} className="replybox" rows="2" type="text" ></textarea>
            <br/>
            <br/>
            <button  type="button"  onClick={this.write.bind(this,boxId)} className="pop-up-btn reply-btn">Send</button>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <hr/><br/><br/><br/>
          </div>
      </>
    )
  }
}

export default Comments
