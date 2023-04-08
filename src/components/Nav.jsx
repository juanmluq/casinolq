import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav nav-tabs" >
                    
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Casino Online</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/games">Juegos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/promos">Promos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/info">Info</a>
      </li>
      <li class="nav-item" >
        <a class="nav-link" href="/invertir">Invertir</a>
      </li>
      <div className='navBtn'>
      
        <Link to="/registrarse" className='link'>
        <button className='btn'>Registrarse</button>
        </Link>
        </div>
        
    </nav>
  );
};

export default Nav;
