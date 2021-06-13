import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function RegPage() {
    return (
        <div className='reg-page-cont'>

           <div className='input-div'>
                <input 
                    type='email' 
                    placeholder='enter email'
                    className='email-input' 
                />

                <input 
                    type='password' 
                    placeholder='enter password'
                    className='password-input' 
                />
           </div>

           <Link to='/todoPage'>
           <button 
             className='reg-btn'
            >
            Register
           </button>
           </Link>

           <p>
               Already registered ? <Link to='/loginPage'>Log in</Link>
           </p>

        </div>
    );
};

export default RegPage;
