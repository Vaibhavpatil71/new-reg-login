import React, { useState} from "react";
import { Link } from 'react-router-dom'
import '../../App.css'

function LoginPage() {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });
    const handleInputChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        setValues((inputField) => {
            console.log(key, value)
            return {
                ...inputField,
                [key]: value,
            }
        });

        // const { id, value } = e.target;
        
    };

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            values.username &&
            values.password
        ) {
            setValid(true);
        }
        setSubmitted(true);
    }

    console.log('values', values);

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to JARVIS </h2>
            <h3>JARVIS aap sabhi ka data Safe rakhe ga for sure</h3>
            <form action="/home" onSubmit={handleSubmit}>
                {submitted && valid && (
                    <div className="success-message">
                        <h3>{values.username}</h3>
                    </div>
                )}
                {!valid && (
                    <p>
                        <label>Username or email address</label><br />
                        <input type="username" name="username" value={values.username} onChange={handleInputChange} />
                    </p>
                )}
                {submitted && !values.username && (
                    <span className="error" id="username-error">
                        Please enter an email address
                    </span>
                )}

                {!valid && (
                    <p>
                        <label>Password</label>
                        <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                        <br />
                        <input type="password" aria-label="Password" name="password" value={values.password} onChange={handleInputChange} aria-required="true" />
                    </p>
                )}

                {submitted && !values.password && (
                    <span className="error" id="password-error">
                        Please enter a password
                    </span>
                )}

                <p>
                    <button id="sub_btn" type="submit" onClick={handleSubmit}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Jarvis ko Vapis milna Ho to...</Link>.</p>
            </footer>
        </div>
    )
}

export default LoginPage