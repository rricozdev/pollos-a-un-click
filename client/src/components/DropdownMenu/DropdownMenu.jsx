import React, { useState, useEffect, useRef } from 'react';
import messageIcon from './message.svg';
import notificationIcon from './notification.svg';
import profileIcon from './joe-doe-profile.png';
import profileNavIcon from './profile.svg';
import settingsIcon from './settings.svg';
import tutorialsIcon from './tutorials.svg';
import helpIcon from './help.svg';
import premiumIcon from './premium.svg';
import logoutIcon from './logout.svg';
import './DropdownMenu.css';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const profileRef = useRef(null);

    const handleProfileClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current && 
            !dropdownRef.current.contains(event.target) &&
            profileRef.current &&
            !profileRef.current.contains(event.target)
        ) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            <span className="navigation__group">
                <img className="icon" src={messageIcon} alt="Message" />
                <img className="icon" src={notificationIcon} alt="Notification" />
                <img 
                    className="profile" 
                    src={profileIcon} 
                    alt="Joe Doe Picture" 
                    onClick={handleProfileClick} 
                    ref={profileRef} 
                />
            </span>
            <div 
                className={`dropdown__wrapper ${dropdownVisible ? 'dropdown__wrapper--fade-in' : 'hide'}`} 
                ref={dropdownRef}
            >
                <div className="dropdown__group">
                    <div className="user-name">Richi Rich</div>
                    <div className="email">rricoz.co@gmail.com</div>
                </div>
                <hr className="divider" />
                <nav>
                    <ul>
                        <li>
                            <img src={profileNavIcon} alt="Profile" /> Mi Perfil
                        </li>
                        <li>
                            <img src={settingsIcon} alt="Settings" /> Configuración
                        </li>
                    </ul>
                    <hr className="divider" />
                    <ul>
                        <li>
                            <img src={tutorialsIcon} alt="Tutorials" /> Documentación
                        </li>
                        <li>
                            <img src={helpIcon} alt="Help" /> Ayuda
                        </li>
                    </ul>
                    <hr className="divider" />
                    <ul>
                        <li>
                            <img src={premiumIcon} alt="Premium" /> Pasate a Pro
                        </li>
                        <li style={{ color: '#E3452F' }}>
                            <img src={logoutIcon} alt="Log Out" /> Log out
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
