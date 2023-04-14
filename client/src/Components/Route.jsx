import { useContext } from 'react';
import { Global } from './Global';
import ContainerList from './ContainerList';
import CreateLoad from './CreateLoad';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Auth from './Auth';

function Routes() {
    const { route, users } = useContext(Global);

    switch (route) {
        case 'home':
            return (
                <Auth roles={'user, admin'}>
                    <Home accounts={users} />
                </Auth>
            );

        case 'containers':
            return (
                <Auth roles={'user'}>
                    <ContainerList />
                </Auth>
            );

        case 'boxes':
            return (
                <Auth roles={'user'}>
                    <CreateLoad />
                </Auth>
            );

        case 'login':
            return <Login />;

        case 'register':
            return <Register />;

        default:
            return null;
    }
}

export default Routes;
