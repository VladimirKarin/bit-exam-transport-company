import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Global } from './Global';
import '../styles/login.css';

function Login() {
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setLogged, setAuthName, setRoute } = useContext(Global);

    useEffect(() => {
        axios
            .get('http://localhost:3003/login', { withCredentials: true })
            .then((res) => {
                if (res.data.status === 'OK') {
                }
            });
    }, []);

    const login = (_) => {
        axios
            .post(
                'http://localhost:3003/login',
                { userName, password },
                { withCredentials: true }
            )
            .then((res) => {
                if (res.data.status === 'OK') {
                    setUserName('');
                    setPassword('');
                    setLogged(true);
                    // setAuthName(res.data.name);
                    // setError(null);
                    // setRoute('home');
                } else {
                    setError(true);
                }
            });
    };

    return (
        <div className="login container col-2">
            <div className="card-header">
                {error ? (
                    <span style={{ color: 'crimson' }}>Login Error</span>
                ) : (
                    <span>Login</span>
                )}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    <span>Hello, guest.</span>
                </h5>
                <div className="login_name">
                    <label className="form-label"></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="login_password">
                    <label className="form-label"></label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-outline-primary btn-lg btn-block"
                    onClick={login}
                >
                    Login
                </button>
            </div>
        </div>
    );
}
export default Login;
