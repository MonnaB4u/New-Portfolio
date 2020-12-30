import React from 'react';
import './Footer.css'

const Footer = () => {

    return (
  
        <div className="container footer">

            <div className="row ml-5 pl-5 m-3">

                <div className="col-md-5 about">
                    <h2 style={{ fontWeight: "bolder", color: "white" }}>About Me</h2>
                    <h4>Moheuddin Monna</h4>
                    <h4>North University of China</h4>
                    <h4>Shanxi,Taiyuan</h4>
                    <h4>Computer Science</h4>

                </div>

                <div className="col-md-4">
                    <h3 style={{ fontWeight: "bolder", color: "white" }}>Skills</h3>
                    <div className="col-md-4 d-flex justify-content-center">


                        <div className="col-md-2 row mr-5 skill">
                            <small>React</small>
                            <small>JavaScript</small>
                            <small>Html</small>
                            <small>Css</small>
                            <small>BootStrap</small>
                        </div>
                        <div className="col-md-2 row mr-5 ml-5 skill">
                            <small>Es6</small>
                            <small>Firebase</small>
                            <small>MongoDb</small>
                            <small>MetarialUi</small>

                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <h3 style={{ fontWeight: "bolder", color: "white" }}>Contact</h3>
                    <div className="row col-md-3">
                        <div className="d-flex mt-5">
                            <a className="img" href="https://www.facebook.com/shea.patrick.750/"> <img src="https://logo.kenh.net/logo/facebook-icon-white.svg.thumb.jpg" alt="" /> </a>
                            <a className="img" href="https://github.com/MonnaB4u"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg" alt="" /> </a>
                            <a className="img" href="https://moheuddin-monnab4u.medium.com/"> <img src="https://reeoo.xnny.net/Medium-icon.png!icon512" alt="" /> </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;