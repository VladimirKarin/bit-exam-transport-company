import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { GlobalProvider } from './Components/Global';

function App() {
    return (
        <GlobalProvider>
            <Nav />
            {/* <Home /> */}
        </GlobalProvider>
    );
}

export default App;
