import React from 'react'
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import Contact from '../Contact';

function Bottom_Container() {
    return (
        <div className='bottom-container'>
            <div className='bottom-left'>
                <h2>Networking.Ai</h2>
                <ul>
                    <li>
                        <Link to="https://www.instagram.com/">
                            <InstagramIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/">
                            <LinkedInIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://twitter.com/">
                            <XIcon />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='bottom-right'>
                <Contact />
            </div>
            {/* <p>&copy; 2024 Techy Software Company. All rights reserved.</p> */}
        </div>
    )
}

export default Bottom_Container
