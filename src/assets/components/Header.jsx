import React from 'react';
import "./Header.css";
const Header = () => {
    return (
        <>
            <header className='header'>
                <nav>
                    <ul>
                        <li><a className='buttons'>Home</a></li>
                        <li><a className='buttons' >Elements Demo</a></li>
                        <li><a className='buttons' >Ready Pages</a ></li>
                        <li><a className='buttons' >Missing Something</a></li>
                        <li><a className='buttons' >Support</a></li>
                        <li className='f-buttons'>
                            <button className='d-button'>Download now</button>
                            <button className='c-button'><i class="bi bi-search"></i> </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header