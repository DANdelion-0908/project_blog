import logo from '../../../assets/dans_logo.png';

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
            <img src={logo} alt="Logo del blog" height={"60%"}/>
            <nav className="header-Navigator">
                <button className="nav-Button" onClick={handleDashboardNavigation}>Inicio</button>
                <button className="nav-Button">Top 5</button>
                <button className="nav-Button" onClick={handleLogout}>Cerrar Sesión</button>
            </nav>
            <p>Logo 2</p>
    </header>
    );
};

export default AdminHeader;