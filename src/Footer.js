import React from 'react';

function Footer(){

  return(
    <footer className="section footer-classic context-white bg-image myfooter ">
      <div className="container">
        <div className="row row-30">
          <div className="col-md-4">
            <span className="dot5"></span>
            <p className="PPC2"><b>PPC by Siemens</b> © 2019</p>
            <p className="footer-title-1">A Travelers’ Blog</p>
            <p className="footer-content-1">Our main focus is to provide high quality, objective and informative travelling content from over the world.</p>
          </div>
          <div className="col-md-4 ">
            <div className="navigation">
              <p><b>Navigation</b></p>
              <div className="nav-list">
                <p>Home</p>
                <p>Discover</p>
                <p>Upload</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="links">
              <p><b>Links</b></p>
              <div className="nav-list">
                <p>About us</p>
                <p>Contact us</p>
                <p>Sitemap</p>
                <p>Contribute</p>
                <p>Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </footer>
  )
}
export default Footer
