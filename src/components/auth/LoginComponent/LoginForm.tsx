// src/LoginForm.tsx
import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
//Import local component Style
import '../style.css';
import { AuthContext } from '../../../context/AuthContext';
import { Errors, UserData } from '../../../types/authType';

const LoginForm: React.FC = () => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
    // Form data will save in this state
    const [userData, setUserData] = useState<UserData>({
        username: '',
        password: '',
    });
    //Errors will save here
    const [errors, setErrors] = useState<Errors>({});
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    // Validate inputs
    const validate = (): boolean => {
        const tempErrors: Errors = {};
        if (!userData.username) {
            tempErrors.username = 'Username is required';
        } else if (userData.username.length > 20) {
          tempErrors.username = 'Username must be short';
        }
        if (!userData.password) {
            tempErrors.password = 'Password is required';
        } else if (userData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Handle submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
          let username = userData.username;
          let password = userData.password;
          setIsLoading(true)
          //Mocking API
          setTimeout(() => {
            setIsLoading(false);
            auth?.handleUser({username, password });
            // Reset form
            setUserData({ username: '', password: '' });
          }, 1000);

        }
    };

    return (
        <div className="form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter you username"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter you password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
            </form>
        </div>
    );
};

export default LoginForm;
