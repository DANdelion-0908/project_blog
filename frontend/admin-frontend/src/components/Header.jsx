import logo from '../../../assets/dans_logo.png';

import { PropTypes } from 'prop-types'

function AdminHeader({ navigator }) {

    const handleDashboardNavigation = () => {
        navigator("admin/dashboard");
        localStorage.removeItem("postId")
    };

    const handleLogout = () => {
        localStorage.removeItem("isVerified");
        alert("Sesión terminada.")
        navigator("dashboard")
    }

    return(
        <header>
            <img id='headerImg' src={logo} alt="Logo del blog" height={"60%"}/>
            <nav className="header-Navigator">
                <button className="nav-Button" onClick={handleDashboardNavigation}>Inicio</button>
                <button className="nav-Button" onClick={handleLogout}>Cerrar Sesión</button>
            </nav>
            <p>Bienvenido, {localStorage.getItem("username")}</p>
    </header>
    );
}

AdminHeader.propTypes = {
    navigator: PropTypes.func.isRequired
};

export default AdminHeader;