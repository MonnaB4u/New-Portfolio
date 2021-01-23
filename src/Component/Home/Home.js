import React from 'react'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import './Home.css'

function Home() {
    return (
        <div className="banner">
            <div className="main">        
        <div>
        <NavBar></NavBar>
        </div>
        <div className="col-md-12">
        <Header></Header>
        </div>

        </div>
    
        </div>
    )
}

export default Home
