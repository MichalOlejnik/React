/*
    handleClick - funkcja sprawdzająca czy przycisk został wciśnięty
    state - status odnoszący się do kliknięcia - domyślnie: false
    fas fa-times - ze strony Font Awesome - jeśli kliknięty - symbol "X"
    fas fa-bars - ze strony Font Awesome - przed kliknięciem - symbol 3x"-"
    fa-car = symbol auta z Font Awesome
    podobnie w przypadk menu - funkcja nav-menu active - w przypadku kliknięcia
*/

import React, { Component } from 'react';
import {Menu} from './Menu';
import './Navbar.css';
import { Button } from "../Button"

class Navbar extends Component {

    state = {clicked:false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    

    render(){
        return(
            
            <nav className="NavbarItems"> 
                <h1 className="navbar-logo">CaRent<i className="fas fa-car"></i></h1>
                
                <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> 
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Menu.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>

                        )
                    })}
                    
                </ul>
                <div id="buttons">
                <Button className="LogButton">Logowanie</Button>
                </div>
            </nav>
        )
    }
}


export default Navbar