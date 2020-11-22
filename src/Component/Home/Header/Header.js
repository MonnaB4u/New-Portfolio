import React from 'react'
import img from '../../../Image/bubble.png'
import monna from '../../../Image/Monna.jpg'
import './Header.css'


function Header() {
    return (
        <div>

            <div className="container mt-4 pt-5">

                <div className="d-flex justify-content-center col-md-8 slide ml-5 mt-5">

                    <h1>Hello, I'm Md Moheuddin Monna</h1>
                    <br />
                    <h3>I am a Front End Web Developer</h3>

                    <div className="d-flex flex-column bd-highlight mb-5 col-md-3" >

                        <a href="https://drive.google.com/uc?export=download&id=1VK2PmxXWWhh6Xb2_MyoqDPeA9qqXAqLk">
                            <button type="button" class="btn btn-outline-info mt-5 button">My resume/Eng</button>
                        </a>
                        <a href="/blog">
                            <button type="button" class="btn btn-outline-info mt-4 button">我的简历/中文</button>
                        </a>
                    </div>

                </div>


                <div className="com-md-2 img-fluid image mr-4">
                    <img className="img-fluid" src={monna} alt="" />
                </div>

            </div>

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
