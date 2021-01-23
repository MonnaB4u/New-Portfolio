import React from 'react';
import './Blog.css'
import monna from '../../../Image/Monna.jpg'


const Blog = () => {
    return (
        // <div className="container mt-5">
        //     <div className="row justify-content-center">

        //    <div className="col-md-4">       
        //    <div className="box">
        //     <a href=" https://pan.baidu.com/s/1AwjYF-siVWmCncJz2bP--g%20%E6%8F%90%E5%8F%96%E7%A0%81:%20kujh">
        //     <h1 className="text">
        //     点击我
        //     </h1>
        //     </a>
        //     <small > 请输入提取码: kujh </small>
        //     </div>
        //     </div> 
        //     </div>
        // </div>
<div className="banner">


        <div className="body">
           <div class="profile-card">
  <header class="headerp">
   
    <a target="_blank" href="#">
      <img src={monna} class="hoverZoomLink"/>
    </a>

 
    <h1>
            Moheuddin Monna
          </h1>

  
    <h2>
            Front End Developer
          </h2>

  </header>

 
  <div class="profile-bio">

         <a href=" https://pan.baidu.com/s/1AwjYF-siVWmCncJz2bP--g%20%E6%8F%90%E5%8F%96%E7%A0%81:%20kujh">
           <h1 className="text">
            点击我
            </h1>
            </a>
            <h6> 请输入提取码: kujh </h6>

  </div>

  
  {/* <ul class="profile-social-links">
    <li>
      <a target="_blank" href="https://www.facebook.com/creativedonut">
        <i class="fa fa-facebook"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitter.com/dropyourbass">
        <i class="fa fa-twitter"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/vipulsaxena">
        <i class="fa fa-github"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.behance.net/vipulsaxena">
       
        <i class="fa fa-behance"></i>
      </a>
    </li>
  </ul> */}
</div>
        </div>
        </div>
    );
};

export default Blog;