import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <img src="re.png" alt="logo" />
            <div className="link">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/signin'>Signin</Link></li>
                    <li><Link to='/signup'>SignUp</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar