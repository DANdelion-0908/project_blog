import { useState } from "react";
import CryptoJS from 'crypto-js';

function Login({ navigator }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegisterNavigation = () => {
        navigator("register");
    };

    async function handleLogin() {
        const apiURL = 'http://localhost:22217/user/login';

        if (email == "" || password == "") {
            alert("Asegúrate de llenar todos los campos.");
            return;
        };

        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            
            if (response.status === 401) {
                alert("Credenciales inválidas. Intenta de nuevo.");
                return;
            
            } else if (response.status != 200) {
                alert("Ocurrió un error al iniciar sesión.");
                console.log(response);
                return;
            };


            console.log(response);
            localStorage.setItem("isVerified", "true")
            navigator("admin/dashboard")


        } catch (error) {
            console.error(error);
        };
    };

    return (
        <div className="background">
            <div id="login-Div">
                <h1 style={{marginBottom: "5%"}}>Ingresa tus credenciales</h1>
                <form>
                    <label htmlFor="emailInput">Correo Electrónico</label>
                    <input type="email" id="emailInput" value={email} onChange={handleEmailChange} style={{marginBottom:"5%"}}/>
                    <label htmlFor="passwordInput">Contraseña</label>
                    <input type="password" id="passwordInput" value={password} onChange={handlePasswordChange} style={{marginBottom:"5%"}}/>
                </form>
                <button onClick={handleLogin}>Continuar</button>
                <button onClick={handleRegisterNavigation}>Registrar usuario</button>
            </div>
        </div>
    );
};

export default Login;