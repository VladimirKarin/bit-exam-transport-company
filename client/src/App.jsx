import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { GlobalProvider } from './Components/Global';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
    return (
        <GlobalProvider>
            <Nav />
            <Register />
            <Login />
            {/* <Home /> */}
        </GlobalProvider>
    );
}

export default App;
