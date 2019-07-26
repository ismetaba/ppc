import React from 'react';
import Modal1Head from './Modal1Head.js'
import Tags from './Tags.js'
import Dropzone from 'react-dropzone';

  class  Modal1 extends React.Component{

    constructor(){
      super();
      this.state={
        tags:[],
        projectTitle:'',
        abstract:'',
        problem:'',
        impact:'',
        stateofart:''
      }
      this.search = this.search.bind(this);
      this.createCard = this.createCard.bind(this);
    }

  search(e){
    if (e.which === 13) {
      let list= this.state.tags;
      list.push(e.target.value);
      this.setState({ tags : list })
      e.target.value='';
    }
  }

  createCard(){

    let data={
      title:document.getElementById('ptitle').value,
      domain:document.getElementById('abstract').value,
      problem:document.getElementById('problem').value,
      impact:document.getElementById('impact').value,
      stateofart:document.getElementById('stateofart').value,
      tags:this.state.tags
    };
    var request = new Request('http://localhost:3000/api/addcard'   ,{
        method: 'POST',
        headers: new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(data)
    });
    fetch(request)
      .then(function(response){
        response.json()
          .then(function(data){
            console.log(data);
          })
      })
  }

  uploadFile(e){
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload=(e) =>{
      console.log(e.target.result);
    }
  }

  render(){

    const tags = this.state.tags.map((tagName) => <Tags key={tagName} name={tagName} />);

    return(
      <div id="myModal" className="Modal">
          <span id="closeModal" className="Close"></span>
          <div className="Modal-content" id="main-modal">
            <div className="row">
            <Modal1Head pageNum={"1"}/>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <br/><br/><br/><br/><br/>
                <p className="pop-up-title-1-2">Project Title</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pop-up-txt-1" >
                  <input id='ptitle' className="modal1-srcbox " type="text" placeholder="Project Title" />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pop-up-btn-1" >
                <button id="next1" type="button" className="pop-up-btn ">Next</button>
              </div>
            </div>
          </div>
          <div className="Modal-content" id="modal-2" >
            <div className="row">
            <Modal1Head pageNum={"2"}/>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <br/><br/><br/><br/><br/>
                <p className="pop-up-title-2-2" >Abstract</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                  <textarea id='abstract' className="modal2-srcbox " rows="5" type="text" placeholder="Tips for utilising these elements∙ Replace any image you want by simply draging your image into the existing image place. ∙ All lists are repeat grids. Before breaking repeat grid make sure to have close to final look. After breaking a repeat grid it cannot be regrouped again."></textarea>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pop-up-btn-2" >
                <button id="next2" type="button" className="pop-up-btn">Next</button>
              </div>
            </div>
          </div>
          <div className="Modal-content" id="modal-3" >
            <div className="row">
            <Modal1Head pageNum={"3"}/>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <br/><br/><br/><br/><br/>
                <p className="pop-up-title-3-2">Problem</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " >
                <textarea className="modal3-srcbox" id='problem' rows="5" type="text" placeholder="Tips for utilising these elements∙ Replace any image you want by simply draging your image into the existing image place. ∙ All lists are repeat grids. Before breaking repeat grid make sure to have close to final look. After breaking a repeat grid it cannot be regrouped again."></textarea>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pop-up-btn-2" >
                <button id="next3" type="button" className="pop-up-btn">Next</button>
              </div>
            </div>
          </div>
          <div className="Modal-content" id="modal-4" >
            <div className="row">
            <Modal1Head pageNum={"4"}/>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <br/><br/><br/><br/><br/>
                <p className="pop-up-title-3-2" >Impact</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                <textarea className="modal4-srcbox " id='impact' rows="5" type="text" placeholder="Tips for utilising these elements∙ Replace any image you want by simply draging your image into the existing image place. ∙ All lists are repeat grids. Before breaking repeat grid make sure to have close to final look. After breaking a repeat grid it cannot be regrouped again."></textarea>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pop-up-btn-2" >
                <button id="next4" type="button" className="pop-up-btn">Next</button>
              </div>
            </div>
          </div>
          <div className="Modal-content" id="modal-5" >
            <div className="row">
            <Modal1Head pageNum={"5"}/>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <br/><br/><br/><br/><br/>
                <p className="pop-up-title-3-2" >State of art</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                <textarea className="modal4-srcbox " id='stateofart' rows="5" type="text" placeholder="Tips for utilising these elements∙ Replace any image you want by simply draging your image into the existing image place. ∙ All lists are repeat grids. Before breaking repeat grid make sure to have close to final look. After breaking a repeat grid it cannot be regrouped again."></textarea>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pop-up-btn-2" >
                <button id="next5" type="button" className="pop-up-btn">Next</button>
              </div>
            </div>
          </div>
          <div className="Modal-content" id="modal-6" >
            <div className="row">
            <Modal1Head pageNum={"6"}/>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <p className="pop-up-title-3-2" >Industries & Tags</p>
                <br/><br/>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                  {tags}
                  <hr/>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " >
                <input id='main-input' className="form-control modal-tag-box" onKeyDown={this.search}  type="text" placeholder="Tags here" aria-label="Search"></input>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pop-up-btn-2" >
                <button id="next6" type="button" className="pop-up-btn">Next</button>
              </div>
            </div>
          </div>
          <div className="Modal-content" id="modal-7" >
            <div className="row">
              <Modal1Head pageNum={"7"}/>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <p className="pop-up-title-3-2" >Industries & Tags</p>
                <br/><br/>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                  <hr/>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 " >
                <div className="jumbotron">
                <Dropzone accept='image/*' onDrop={acceptedFiles => {
                  console.log(acceptedFiles[0])
                }} multiple={true}>
                  {({getRootProps, getInputProps}) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 " >
                <div className="jumbotron">
                <Dropzone accept='image/*' onDrop={acceptedFiles => {
                  console.log(acceptedFiles[0])
                }} multiple={true}>
                  {({getRootProps, getInputProps}) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pop-up-btn-2" >
                <button id="next7" type="button" className="pop-up-btn">Next</button>
              </div>
            </div>
          </div>
          <div className="Modal-content" id="modal-8" >
            <div className="row">
              <div className="col-lg-5 col-md-4 col-sm-4 col-xs-4">
                <br/><br/><br/><br/><br/><br/>
                <i className="fas fa-check fa-10x" ></i>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " >
                <p className="text-center">Congratulations!</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " >
                <p className="text-center">You have posted a new project.</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " >
                <p className="text-center">Click here to go your project page</p>
                <br/><br/><br/><br/>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pop-up-btn-2" >
                <button id="next8" type="button" onClick={this.createCard.bind(this)} className="pop-up-btn">Publish</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Modal1
