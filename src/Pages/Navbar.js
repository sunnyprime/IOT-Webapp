import React from 'react'

export default function Navbar() {
    return (
        <div>
            <header class="header_area">	
        <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                   
                    <a class="navbar-brand logo_h" href="index.html">E-CALN</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                  
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li> 
                            <li class="nav-item"><a class="nav-link" href="feature.html">Features</a></li> 
                            <li class="nav-item"><a class="nav-link" href="price.html">Price</a></li>     
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" href="feature.html">Features</a></li> 
                                    <li class="nav-item"><a class="nav-link" href="price.html">Price</a></li>
                                    <li class="nav-item"><a class="nav-link" href="element.html">Element</a></li>
                                </ul>
                            </li>
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                                    <li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
                                </ul>
                            </li> 
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="right-button">
                        <ul>
                            <li class="shop-icon"><a href="#"><i class="ti-shopping-cart-full"></i><span>0</span></a></li>
                            <li><a class="sign_up" href="">Sign Up</a></li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
    </header>
        </div>
    )
}
