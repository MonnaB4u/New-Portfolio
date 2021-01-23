import React from 'react'
import img from '../../../Image/bubble.png'
import monna from '../../../Image/Monna.jpg'
import './Header.css'


function Header() {
    return (
        <div>

            <div className="container mt-5 d-flex">
                <div className="row justify-content-between align-items-center">
                    <div className="  col-md-8 slide  mt-2">

                        <h1 className="text-hello">Hello, I'm Md Moheuddin Monna</h1>
                        <br />
                        <h3>I am a Front End Web Developer</h3>

                        {/* <div className=" flex-column bd-highlight mb-5 col-md-1 " > */}

                            <a href="https://drive.google.com/uc?export=download&id=1hNV3brPs5zbb3Z__wXcd1Dzo6Wb-rWXX">
                                <button type="button" class="btn btn-outline-info mt-5 button btn-hover">My resume/Eng</button>
                            </a> <br/>
                            <a href="/blog">
                                <button type="button" class="btn btn-outline-info mt-4 button btn-hover">我的简历/中文</button>
                            </a>
                        {/* </div> */}

                    </div>
                    <div className="col-md-3 ml-5 mt-5">

                        <div className=" img-fluid image bounce-4">
                            <img className="img-fluid" src={monna} alt="" />
                        </div>


                    </div>
                    
                </div>
                
    </div>

            {/* //    ................

            <div className="container mb-5 pb-4 mt-5 running">

                <div className="row justify-content-between align-items-center">



                     <div className="col-md-7 details">
                        <h1>Hello, I'm Md Moheuddin Monna</h1>
                         <br />
                         <h3>I am a Front End Web Developer</h3>

                        <br />
                         <a href="https://drive.google.com/uc?export=download&id=1hNV3brPs5zbb3Z__wXcd1Dzo6Wb-rWXX">
                             <button type="button" class="btn btn-outline-info mt-5 button btn-hover">My resume/Eng</button>
                         </a><br />
                        <a href="/blog">
                             <button type="button" class="btn btn-outline-info mt-4 button btn-hover">我的简历/中文</button>
                         </a>
                     </div>

                     <div className="col-md-5 runImage ">
                         <div className=" img-fluid image bounce-4">
                             <img className="img-fluid" src={monna} alt="" />
                         </div>
                     </div>
                 </div>

             </div>

        //    ................ */}

            <div class="bubble d-flex">
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Header
