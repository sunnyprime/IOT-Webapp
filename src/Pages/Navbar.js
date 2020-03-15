import React, { Component } from 'react'
import { signInWithGoogle } from '../Firebase/firebase.utils';
import { auth } from '../Firebase/firebase.utils';

export default class Navbar extends Component {
    constructor() {
        super()
    
        this.state= {
          currentUser:null,
          
        }
      }
    
      unsubscribeFromAuth = null
    
    
      componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
          this.setState({currentUser:user})
          console.log(user);
          
        })
      }
    
      componentWillUnmount() {
        this.unsubscribeFromAuth()
      }
    render() {
        return (
            <div>
                <header className="header_area">	
        <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                   
                    <a className="navbar-brand logo_h" href="index.html">E-CALN</a>
             
                  
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li> 
                            <li className="nav-item"><a className="nav-link" href="feature.html">About</a></li> 
                            <li className="nav-item"><a className="nav-link" href="feature.html">Product</a></li> 
                            <li className="nav-item"><a className="nav-link" href="feature.html">Team</a></li> 
                            <li className="nav-item"><a className="nav-link" href="feature.html">Technology</a></li> 
                            
                
                   
                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="right-button">
                        <ul>
                           {/* ( */}
                            <li><button className="sign_up" onClick={signInWithGoogle}>Sign In</button></li>:
                           {/* <li> <button className="sign_up" onClick={()=> auth.signOut()}>Sign Out</button></li> */}
                           {/* ) */}
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
    </header>
            </div>
        )
    }
}
