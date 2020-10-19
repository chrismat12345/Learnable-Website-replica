import React from 'react';
import '../ComponentCSS/Secnav.css'
import {Link, NavLink} from 'react-router-dom'

const secNav = () => {
	return (
    <div>
      <div className="sec-nav-container">
        <ul>
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/Software">SOFTWARE DEVELOPERS</Link>
          </li>
          <li>
            <Link to="/Product">PRODUCTDESIGNERS</Link>
          </li>
          <li>
            <Link to="/Apply">APPLY</Link>
          </li>
          <li>
            <Link to="/Journal">JOURNAL</Link>
          </li>
          <li>
            <Link to="/Faq">FAQ</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default secNav;
