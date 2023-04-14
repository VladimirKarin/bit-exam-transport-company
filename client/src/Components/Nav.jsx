import '../styles/nav.css';
function Nav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
                <a class="navbar-brand" href="#">
                    TranSCompany
                </a>
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
                                <a class="nav-link" href="#">
                                    Home
                                    {/* Home <span class="sr-only">(current)</span> */}
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Container List
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Create Load
                                </a>
                            </li>
                        </div>
                        <div className="right">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    User
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Login
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Register
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
