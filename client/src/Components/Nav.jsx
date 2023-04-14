import '../styles/nav.css';
import { useContext } from 'react';
import { Global } from './Global';
import axios from 'axios';

function Nav() {
    const {
        route,
        setRoute,
        authName,
        setAuthName,
        setLogged,
        authRole,
        setAuthRole,
    } = useContext(Global);

    const logOut = (_) => {
        axios
            .post('http://localhost:3003/logout', {}, { withCredentials: true })
            .then((res) => {
                setLogged(false);
                setAuthName(null);
                setAuthRole(null);
                setRoute('home');
                console.log(route);
            });
    };

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
                <span class="navbar-brand">TranSCompany</span>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <div className="left">
                            <li class="nav-item active">
                                <span
                                    class="nav-link"
                                    onClick={(_) => setRoute('home')}
                                    className={
                                        'nav-link' +
                                        (route === 'home' ? ' active' : '')
                                    }
                                    aria-current="page"
                                >
                                    Home
                                    {/* Home <span class="sr-only">(current)</span> */}
                                </span>
                            </li>
                            {['user'].includes(authRole) ? (
                                <li class="nav-item">
                                    <span
                                        onClick={(_) => setRoute('containers')}
                                        className={
                                            'nav-link' +
                                            (route === 'containers'
                                                ? ' active'
                                                : '')
                                        }
                                        aria-current="page"
                                    >
                                        Container List
                                    </span>
                                </li>
                            ) : null}
                            {['user'].includes(authRole) ? (
                                <li class="nav-item">
                                    <span
                                        onClick={(_) => setRoute('boxes')}
                                        className={
                                            'nav-link' +
                                            (route === 'boxes' ? ' active' : '')
                                        }
                                        aria-current="page"
                                    >
                                        Create Load
                                    </span>
                                </li>
                            ) : null}
                        </div>
                        <div className="right">
                            {authName ? (
                                <>
                                    <li class="nav-item">
                                        <span class="nav-link">{authName}</span>
                                    </li>
                                    <li class="nav-item">
                                        <span class="nav-link" onClick={logOut}>
                                            Logout
                                        </span>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li class="nav-item">
                                        <span
                                            onClick={(_) => setRoute('login')}
                                            href="#"
                                            className={
                                                'nav-link' +
                                                (route === 'login'
                                                    ? ' active'
                                                    : '')
                                            }
                                            aria-current="page"
                                        >
                                            Login
                                        </span>
                                    </li>
                                    <li class="nav-item">
                                        <span
                                            onClick={(_) =>
                                                setRoute('register')
                                            }
                                            href="#"
                                            className={
                                                'nav-link' +
                                                (route === 'login'
                                                    ? ' active'
                                                    : '')
                                            }
                                            aria-current="page"
                                        >
                                            Register
                                        </span>
                                    </li>
                                </>
                            )}
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
