import { useState } from "react";
import { SHA256 } from "crypto-js";
import { PropTypes } from "prop-types";

function Register({ navigator }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    async function handleRegister() {
        const apiURL = 'http://localhost:22217/user/register';

        if (email == "" || password == "" || username == "") {
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
                    name: username,
                    email: email,
                    password: SHA256(password).toString()
                })
            })
            
            if (!response.ok) {
                alert("Ocurrió un error al iniciar sesión.");
                return;
            }

            const data = await response.json();

            if (data.affectedRows === 1) {
                alert("Usuario registrado exitosamente.");
                navigator("login");
                return;
            
            } else {
                alert(`Error: ${data.message}`);
                return;
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="background">
            <div id="login-Div">
                <h1 style={{marginBottom: "5%"}}>Ingresa tus credenciales</h1>
                <form>
                    <label htmlFor="usernameInput">Nombre</label>
                    <input type="text" id="usernameInput" value={username} onChange={handleUsernameChange} style={{marginBottom: "5%"}}/>
                    <label htmlFor="emailInput">Correo Electrónico</label>
                    <input type="email" id="emailInput" value={email} onChange={handleEmailChange} style={{marginBottom:"5%"}}/>
                    <label htmlFor="passwordInput">Contraseña</label>
                    <input type="password" id="passwordInput" value={password} onChange={handlePasswordChange} style={{marginBottom:"5%"}}/>
                </form>
                <button onClick={handleRegister}>Continuar</button>
            </div>
        </div>
    );
}

Register.propTypes = {
    navigator: PropTypes.func.isRequired
};

export default Register;