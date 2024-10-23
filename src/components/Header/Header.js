import React from 'react';
import './Header.css';
import headerIcon from '../Pictures/HelpyLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className='header'>

        <img
            className='header__icon'
            src={headerIcon}
            alt="Header Icon"
        />

        <div className='header__center'>
            <input type='text'/>
            <SearchIcon />
        </div>

        <div className='header__right'>
            <p>Join as a landlord</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>
        
    </div>


  )
}

export default Header
