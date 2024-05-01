import logo from '../../../assets/dans_logo.png';

import { PropTypes } from "prop-types";

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
            <img id='headerImg' src={logo} alt="Logo del blog"/>
            <nav className="header-Navigator">
                <button className="nav-Button" onClick={handleDashboardNavigation}>Inicio</button>
                <button className="nav-Button" onClick={handleLoginNavigation}>Iniciar Sesión</button>
            </nav>
    </header>
    );
}

Header.propTypes = {
    navigator: PropTypes.func.isRequired
};

export default Header;