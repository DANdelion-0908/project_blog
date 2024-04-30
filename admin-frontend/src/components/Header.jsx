import logo from '../assets/dans_logo.png';

function Header({ navigator }) {

    const handleDashboardNavigation = () => {
        navigator("dashboard");
        localStorage.clear()
    };

    return(
        <header>
            <img src={logo} alt="Logo del blog" height={"60%"}/>
            <nav className="header-Navigator">
                <button className="nav-Button" onClick={handleDashboardNavigation}>Inicio</button>
                <button className="nav-Button">Top 5</button>
                <button className="nav-Button">Cerrar Sesión</button>
            </nav>
            <p>Logo 2</p>
    </header>
    );
};

export default Header;