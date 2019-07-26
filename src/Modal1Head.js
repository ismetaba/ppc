import React from 'react';

function Modal1Head(props){

  return(
    <>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
        <p className="pop-up-title-1-1">Tell us about your idea</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
        <p className="pop-up-page" align="right">{props.pageNum}/7</p>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
        <hr/>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
        <p className="pop-up-content-1"><b>Tips for utilising these elements</b> <br/><b>∙ Replace any image</b> you want by simply draging your image into the existing image place. <br/><b>∙ All lists are repeat grids.</b> Before breaking repeat grid make sure to have close to final look. After breaking a repeat grid it cannot be regrouped again.</p>
      </div>
    </>
  )
}



export default Modal1Head
