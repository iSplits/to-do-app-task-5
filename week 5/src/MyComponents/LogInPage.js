import React from 'react';
import { Link } from 'react-router-dom';

import '../MyComponents/style.css';

function LogInPage() {
    return (
        <div className='login-page-cont'>
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
                Log In
            </button>
           </Link>

           <p>
               Not registered ? <Link to='/'>Sign up</Link>
           </p> 
        </div>
    );
};

export default LogInPage;
