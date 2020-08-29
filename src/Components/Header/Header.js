import React from 'react';
import  './Header.css';
const Header = () => {

    return (
        <div>
            <h1 className="text-center mt-3">Online Courses</h1>
            <nav className="navbar bg-dark navbar-dark">                
                <div className="navbarNav">
                    <a href="/courses">Courses</a>
                    <a href="/aboutus">About Us</a>
                    <a href="/signin">Sign in</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;