import React from 'react'

const MenuItem = ({ name, icon }) => {
    return (
        <div className='menu-item'>

            <a href='#'>
                <span className={icon}>home</span>
                <h3>{name}</h3>
            </a>
        </div>
    )
}

export default MenuItem