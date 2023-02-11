import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className='nav'>
            <Link className='Link' to="/"><h1 className="logo Link">Shekay</h1></Link>
            <ul className="nav__list">
                <li className="nav__list-link">
                    <a href="" className="nav__list--anchor">About Us</a>
                </li>

              <Link to="/support">
              <li className="nav__list-link">
                    <a href="" className="nav__list--anchor">Support</a>
                </li></Link>

                <li className="nav__list-link">
                    <Link className='Link' to="/price"><a href="" className="nav__list--anchor padding">Apply as a Job seeker</a></Link>
                </li>
                <li className="nav__list-link">
                <Link  to="/employer" ><button   className="text-white pad-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hire a professional</button>
                </Link>

                </li>
                <li className="nav__list-link">
                   <Link  to="/signin" className="Link nav__list--anchor"> <a href="" className="nav__list--anchor">Log in</a></Link>
                </li>
            </ul>
            </nav>

        </div>
    );
}

export default Nav;
