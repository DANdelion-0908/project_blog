import { useState } from "react";
import { SHA256 } from 'crypto-js';
import { PropTypes } from "prop-types";
import { Suspense } from "react";

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
        const apiURL = 'http://localhost:2048/user/login';

        if (email == "" || password == "") {
            alert("Asegúrate de llenar todos los campos.");
            return;
        }

        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: SHA256(password).toString()
                })
            })
            
            if (response.status === 401) {
                alert("Credenciales inválidas. Intenta de nuevo.");
                return;
            
            } else if (response.status != 200) {
                alert("Ocurrió un error al iniciar sesión.");
                return;
            }

            const data = await response.json();

            if (data.length > 0) {
                localStorage.setItem("isVerified", "true")
                localStorage.setItem("username", data[0].name)
                navigator("admin/dashboard")
                return;  
            
            } else {
                alert("Credenciales Inválidas. Intenta de nuevo.")
                return;
            }



        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="background">
            <Suspense fallback={<div className="loader"></div>}>
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
            </Suspense>
        </div>
    );
}

Login.propTypes = {
    navigator: PropTypes.func.isRequired
};

export default Login;