import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
        <div>

        <nav class="navbar navbar-expand-lg navbar-light " >
  <div class="collapse navbar-collapse d-flex justify-content-center">
    <ul class="navbar-nav ancor">

      <li class="nav-item active">
        <a class="nav-link" style={{color:"orange"}}  href="home">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item">
        <a class="nav-link" style={{color:"orange"}} href="projects">My-Projects</a>
      </li>

      <li class="nav-item">
      <a class="nav-link" style={{color:"orange"}} href="https://medium.com/me/stories/public">Blog</a>
    </li>

    <li class="nav-item">
        <a class="nav-link" style={{color:"orange"}} href="about">About-me</a>
      </li>
     
    </ul>
  </div>
</nav>
            
        </div>
    )
}

export default NavBar
