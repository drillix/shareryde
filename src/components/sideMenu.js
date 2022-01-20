import React from 'react';
import logo from '../logo.svg'
import {Link, useLocation} from 'react-router-dom';


const Logo = () => {
    return (
        <img className="logo" src={logo} alt="logo"/>
    )
}

const Menu = () => {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");

    return (

        <ul className="menu">
            <Link to='/'>
                <li className={splitLocation[1] === "" ? "activated" : "inactive"}><i
                    className="material-icons">flip</i> Search
                </li>
            </Link>
            <Link to='/pages/account'>
                <li className={splitLocation[2] === "account" ? "activated" : "inactive"}><i
                    className="material-icons-outlined">person</i> Accounts
                </li>
            </Link>
            <Link to='/pages/community'>
                <li className={splitLocation[2] === "community" ? "activated" : "inactive"}><i
                    className="material-icons-outlined">forum</i> Community
                </li>
            </Link>
            <Link to='/pages/offer'>
                <li className="menuBtn"><i className="material-icons">album</i> Offer Ride</li>
            </Link>
        </ul>


    )
}

const Sidemenu = () => {
    return (
        <div className="side-menu">
            <Logo/>
            <Menu/>
        </div>
    )
}

export default Sidemenu;