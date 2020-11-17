import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component {
    state= {
        className:'navlinks'
    }
    handleClick = () =>{
        this.setState({
          className:'navbar-mobile'
        });
        let className = this.state.className
        if(className=== 'navbar-mobile'){
            this.setState({
                className: 'navlinks'
            })
        } 
        
      }

    render(){
        return(
            <nav className='nav'>
                <div className='container nav-content'>
                    <a className='brand-name'>PokeTimes</a>
                    <button className='hamburger' onClick={this.handleClick}>
                        <i className='fa fa-bars'></i>
                    </button>
                    <ul className={this.state.className}>
                        <li><Link to='/'>Home</Link></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;