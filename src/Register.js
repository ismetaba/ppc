
import React from 'react';

class  Register extends React.Component{

  registerBtn(){

    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var number=document.getElementById("number");
    var password=document.getElementById("password");
    let data={
      name:name.value,
      email:email.value,
      number:number.value,
      password:password.value
    };
    if(data.password==='') alert('Please fill out the fields');
    if(data.name!=='' && data.email!=='' && data.number!=='' ){
      var request = new Request('http://localhost:3000/api/register',{
          method: 'POST',
          headers: new Headers({'Content-Type':'application/json'}),
          body: JSON.stringify(data)
      });
      const _this = this;
      fetch(request)
        .then(function(response){
          response.json()
            .then(function(data){
              _this.setState({cardDetail: data})
              if(data.message==="Success"){
                alert('Success');
                window.location="./../";
              }
            })
        })
    }
  }

  render(){
    return(
      <div className="container jumbotron">
        <div className="register-body">
          <div className="container">
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input id="name" className="form-control" placeholder="Full name" type="text" required="required" />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
                <input id="email" className="form-control" placeholder="Email address" type="text" required="required" />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-phone"></i>
                  </span>
                </div>
                <input id="number" className="form-control" placeholder="Phone number" type="text" required="required" />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input id="password" className="form-control" placeholder="Create password" type="text" required="required" />
              </div>
              <div className="form-group create-account">
                <button type="submit" onClick={this.registerBtn.bind(this)} className="text-center btn-register"> Create Account</button>
              </div>
            <p className="create-account" >Have an account? Log In </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
