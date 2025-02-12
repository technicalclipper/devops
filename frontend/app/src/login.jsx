import React from 'react';
import './App.css';

export function Login(){
    return(
        <div className='loginbg'>
            <div className='logintitle'>BUILD YOUR PC</div>
            
            <div className='logincenter'>
                <div className='logincontainer'>
                    <input className="logininput" type="text" name="username" placeholder='USERNAME'></input>
                    <input className="logininput" type="password" name="username" placeholder='PASSWORD'></input>
                    <div className='forgotpassword'>FORGOT PASSWORD?</div>
                    <div className='innerlogin'>
                        <div className='login'>LOGIN</div>
                        <img className='or' src="images/orline.png"/>
                        <img className='googlelogin' src="images/google_button.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}