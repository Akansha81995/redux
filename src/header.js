import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return(
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/animals">Animals</Link></li>
            </ul>
        )
    }
}
export default Header