import React from 'react'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import './Home.css'

function Home() {
    return (
        <div className="container">      
        <NavBar ></NavBar>     
        <Header></Header>   
        </div>
    )
}

export default Home
