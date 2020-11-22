import React from 'react';
import img from '../../../Image/SecontPicture.jpg'
import './CustomerFeedBackHeader.css'

const CustomerFeedBackHeader = () => {
    return (

        <section className="container mb-2 ">

            <div className="row d-flex justify-content-between m-5">
            
            <div className="col-md-4 mt-5 pt-2 ml-5 images">                
                <img src={img} alt=""/>               
            </div>

            <div className="col-md-7">  

            <div className="row m-2 p-2">
            <div className="col-md-6">
              <div className="m-3">
              <a href="/home" style={{ textDecoration: "none"}}>
                <div className="d-flex awesomeGrid justify-content-center">
                  <div className="images">
                    <img className="mt-4" src="" alt="" />
                  </div>
                  <div className="ml-2 mt-4 text">                 
                  <h2>Home</h2>                  
                  </div>                
                  <div>
                  </div>
                </div>
                </a>
              </div>

            </div>

            <div className="col-md-6">
              <div className="m-3">
              <a href="/projects" style={{ textDecoration: "none"}}>
                <div className="d-flex awesomeGrid2 ml-3 justify-content-center">
                  <div className="images">
                    <img className="mt-4" src="" alt="" />
                  </div>
                  <div className="ml-2 mt-4 text">
                    <h2>My Project</h2>
                    
                  </div>
                  <div>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </div>


          <div className="row m-2 p-2">
            <div className="col-md-6">
              <div className="m-3">
              <a href="/https://medium.com/me/stories/public" style={{ textDecoration: "none"}}>
                <div className="d-flex awesomeGrid3 justify-content-center">
                  <div className="images">
                    <img className="mt-4" src="" alt="" />
                  </div>
                  <div className="ml-2 mt-4 text">
                    <h2>Blog</h2>
                    
                  </div>
                  <div>
                  </div>
                </div>
                </a>
              </div>

            </div>

            <div className="col-md-6">
              <div className="m-3">
              <a href="https://drive.google.com/uc?export=download&id=1VK2PmxXWWhh6Xb2_MyoqDPeA9qqXAqLk" style={{ textDecoration: "none"}}>
                <div className="d-flex awesomeGrid4 ml-3 justify-content-center">
                  <div className="images">
                    <img className="mt-4" src="" alt="" />
                  </div>
                  <div className="ml-2 mt-4 text">
                    <h2>My Resume</h2>
                   
                  </div>
                  <div>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </div>

           
            </div>
            </div>
                       
        </section>
    );
};

export default CustomerFeedBackHeader;