import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import { GlobalProvider } from './Components/Global';
import Routes from './Components/Route';

function App() {
    return (
        <GlobalProvider>
            <Nav />
            {/* <Routes /> */}
        </GlobalProvider>
    );
}

export default App;
