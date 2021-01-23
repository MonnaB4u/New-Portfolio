import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
        <div>

        <nav class="navbar navbar-expand-lg navbar-light " >
  <div class="collapse navbar-collapse d-flex justify-content-center">
    <ul class="navbar-nav ancor">

      <li class="nav-item ">
        <a class="nav-link m-3"  href="home">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item">
        <a class="nav-link color  m-3"  href="projects">My-Projects</a>
      </li>

      <li class="nav-item">
      <a class="nav-link  m-3"  href="https://medium.com/me/stories/public">Blog</a>
    </li>

    <li class="nav-item">
        <a class="nav-link  m-3" href="about">About-me</a>
      </li>
      {/* style={{color:"orange"}} */}
    </ul>
  </div>
</nav>
            
        </div>
    )
}

export default NavBar
