import React from 'react'

//impirt brain image
import brain from './Images/brain.jpg';

const Header = () => {
    return (
        <div>
            <header className='headerClass'>
                <img className='logoImg' src={brain} atl='' width='120px' />
                Test your memory skills
            </header>
            
        </div>
    )
}

export default Header
