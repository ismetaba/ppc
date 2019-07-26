import React from 'react';

class  Header extends React.Component{

  sendProject(){
    var modal=document.getElementById("myModal");
    var body=document.getElementsByTagName("body");
    var container=document.getElementById("myContainer");
    var btnClose=document.getElementById("next8");
    var next1=document.getElementById("next1");
    var next2=document.getElementById("next2");
    var next3=document.getElementById("next3");
    var next4=document.getElementById("next4");
    var next5=document.getElementById("next5");
    var next6=document.getElementById("next6");
    var next7=document.getElementById("next7");

    var mainModal = document.getElementById("myModal");
    var myModal1 = document.getElementById("main-modal");
    var myModal2 = document.getElementById("modal-2");
    var myModal3 = document.getElementById("modal-3");
    var myModal4 = document.getElementById("modal-4");
    var myModal5 = document.getElementById("modal-5");
    var myModal6 = document.getElementById("modal-6");
    var myModal7 = document.getElementById("modal-7");
    var myModal8 = document.getElementById("modal-8");
    mainModal.style.display="block";
    myModal1.style.display ="block";
    myModal2.style.display ="none";
    myModal3.style.display ="none";
    myModal4.style.display ="none";
    myModal5.style.display ="none";
    myModal6.style.display ="none";
    myModal7.style.display ="none";
    myModal8.style.display ="none";

    container.parentElement.className="ModalOpen";

    next1.onclick=function(){
      if(document.getElementById('ptitle').value!=='') {
        myModal1.style.display ="none";
        myModal2.style.display="block";
      }
    };


    next2.onclick=function(){
      if(document.getElementById('abstract').value!=='') {
        myModal2.style.display ="none";
        myModal3.style.display="block";
      }
    };


    next3.onclick=function(){
      if(document.getElementById('problem').value!=='') {
        myModal3.style.display ="none";
        myModal4.style.display="block";
      }
    };


    next4.onclick=function(){
      if(document.getElementById('impact').value!=='') {
        myModal4.style.display ="none";
        myModal5.style.display="block";
      }
    };


    next5.onclick=function(){
      if(document.getElementById('stateofart').value!=='') {
        myModal5.style.display ="none";
        myModal6.style.display="block";
      }
    };


    next6.onclick=function(){

      myModal6.style.display ="none";
      myModal7.style.display="block";
    };


    next7.onclick=function(){

      myModal7.style.display ="none";
      myModal8.style.display="block";
    };

    btnClose.onclick=function(){
      modal.className="Modal is-hidden is-visuallyHidden";
      body.className="";
      container.className="MainContainer";
      container.parentElement.className="";
      mainModal.style.display="none";
      myModal1.style.display="block";
      myModal2.style.display="none";
      myModal3.style.display="none";
      myModal4.style.display="none";
      myModal5.style.display="none";
      myModal6.style.display="none";
      myModal7.style.display="none";
      myModal8.style.display="none";
    };

    window.onclick=function(e){
      if (e.target === modal) {
        mainModal.style.display="none";
        myModal1.style.display="block";
        myModal2.style.display="none";
        myModal3.style.display="none";
        myModal4.style.display="none";
        myModal5.style.display="none";
        myModal6.style.display="none";
        myModal7.style.display="none";
        myModal8.style.display="none";
      }
      e.target=modal&&(modal.className="Modal is-hidden",body.className="",container.className="MainContainer",container.parentElement.className="")
    };

  }

  render(){
    let a='nav-link text-secondary';
    let b='nav-link text-secondary';
    let c='nav-link text-secondary';


    switch (this.props.active) {

      case 'home':
          b='nav-link text-dark'
      break;
      case 'discover':
        a='nav-link text-dark'
      break;
      case 'register':
        c='nav-link text-dark'
      break;
      default:
    }

    return(
      <header className="MainHeader">
        <nav className="mynavbar2 navbar navbar-light navbar-expand-lg text-dark py-4">
          <div className="container mycontainer1">
            <p  className="navbar-brand text-dark"><span className="dot"></span><b className="PPC1">PPC</b></p> <p className="pipe"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;</p><p className="ppc">Paint Point Catalog</p>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-ss" aria-controls="navbar-ss">
              <span className="navbar-toggler-icon ">
               </span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-ss">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item px-3">
                  <a href="/home/1" className={a}>HOME</a>
                </li>
                <li className="nav-item px-3">
                  <a href="/discover" className={b}>DISCOVER</a>
                </li>
                <li className="nav-item px-3">
                  <a href="/register" className={c}>REGISTER</a>
                </li>
                <li className="nav-item prj-btn" >
                  <span className="mybtn" onClick={this.sendProject.bind(this)} id="myBtn">Send Your Project</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
    )
  }
}

export default Header
