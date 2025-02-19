import React, { useState } from 'react';
import './App.css';

export function Login(){
    const [user, setUser] = useState({ username: "", password: "" });

    function handleUserInput(e) {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    return (
        <div className='loginbg'>
            <div className='logintitle'>BUILD YOUR PC</div>
            
            <div className='logincenter'>
                <div className='logincontainer'>
                    <input
                        className="logininput"
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleUserInput}
                        placeholder='USERNAME'
                    />
                    <input
                        className="logininput"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleUserInput}
                        placeholder='PASSWORD'
                    />
                    <div className='forgotpassword'>FORGOT PASSWORD?</div>
                    <div className='innerlogin'>
                        <div className='login'>LOGIN</div>
                        <img className='or' src="images/orline.png" alt="or" />
                        <img className='googlelogin' src="images/google_button.png" alt="google login" />
                    </div>
                </div>
            </div>
        </div>
    );
}
