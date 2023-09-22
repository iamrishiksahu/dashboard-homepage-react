import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import './Sidenav.css'

const Sidenav = () => {

    const handleCloseClick = () => {
        const sideMenu = document.querySelector('aside');
        sideMenu.style.display = 'none';
    }
    return (

        <aside>

            <div className="top">
                <div className="logo">
                    <img src='/logo.png' />
                    <h2>Rishik Sahu</h2>
                </div>
                <div className="close" id='close-btn'>
                    <span className="material-symbols-outlined" onClick={handleCloseClick}>
                        close
                    </span>

                </div>
            </div>

            <div className="sidebar">
                <a href='#' className='active'>
                    <span className={'material-symbols-outlined'}>dashboard</span>
                    <h3>Dashboard</h3>
                </a>
                <a href='#'>
                    <span className={'material-symbols-outlined'}>group</span>
                    <h3>Users</h3>
                </a>
                <a href='#'>
                    <span className={'material-symbols-outlined'}>pie_chart</span>
                    <h3>Charts</h3>
                </a>
                <a href='#'>
                    <span className={'material-symbols-outlined'}>mail</span>
                    <h3>Messages</h3>
                </a>
                <a href='#'>
                    <span className={'material-symbols-outlined'}>gallery_thumbnail</span>
                    <h3>Gallery</h3>
                </a>
                <a href='#'>
                    <span className={'material-symbols-outlined'}>groups</span>
                    <h3>Teams</h3>
                </a>
                <a href='#'>
                    <span className={'material-symbols-outlined'}>attach_money</span>
                    <h3>Payments</h3>
                </a>
                <a href='#'>
                    <span className={'material-symbols-outlined'}>settings</span>
                    <h3>Settings</h3>
                </a>
                <a href='#'>
                    <span className={'material-symbols-outlined'}>help</span>
                    <h3>Help</h3>
                </a>

            </div>

        </aside>



    )
}

export default Sidenav