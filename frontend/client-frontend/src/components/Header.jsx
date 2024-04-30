import logo from '../../../assets/dans_logo.png';

function Header({ navigator }) {

    const handleDashboardNavigation = () => {
        navigator("dashboard");
        localStorage.clear()
    };

    const handleLoginNavigation = () => {
        navigator("login");
    };

    return(
        <header>
            <img src={logo} alt="Logo del blog" height={"60%"}/>
            <nav className="header-Navigator">
                <button className="nav-Button" onClick={handleDashboardNavigation}>Inicio</button>
                <button className="nav-Button">Top 5</button>
                <button className="nav-Button" onClick={handleLoginNavigation}>Iniciar Sesión</button>
            </nav>
    </header>
    );
};

export default Header;