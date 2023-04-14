import { useContext, useState } from 'react';
import axios from 'axios';
import { Global } from './Global';

function Register() {
    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const { setRoute } = useContext(Global);

    const register = (_) => {
        if (firstName.length < 3) {
            setError(`Name is too short`);
            return;
        }
        if (userName.length < 3) {
            setError(`Username is too short`);
            return;
        }

        if (password.length < 3) {
            setError(`Your password is too short`);
            return;
        }

        if (password !== repeatedPassword) {
            setError(`Password doesn't match`);
            return;
        }

        axios
            .post(
                'http://localhost:3003/register',
                { userName, password, firstName },
                { withCredentials: true }
            )
            .then((res) => {
                if (res.data.status === 'OK') {
                    setFirstName('');
                    setUserName('');
                    setPassword('');
                    setRepeatedPassword('');
                    setError(null);
                    setRoute('login');
                } else {
                    setError('Server error');
                }
            })
            .catch((error) => {
                setError(
                    error.response ? error.response.statusText : error.code
                );
            });
    };

    return (
        <div className="login">
            <div className="card-header">
                {error ? (
                    <span style={{ color: 'crimson' }}>{error}</span>
                ) : (
                    <span>Registration</span>
                )}
            </div>
            <div className="card-body">
                <div className="login_name">
                    <label className="form-label"></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
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
                <div className="login_password">
                    <label className="form-label"></label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Repeat your password"
                        value={repeatedPassword}
                        onChange={(e) => setRepeatedPassword(e.target.value)}
                    />
                </div>
                <button className="button add" onClick={register}>
                    Register New User
                </button>
            </div>
        </div>
    );
}
export default Register;
