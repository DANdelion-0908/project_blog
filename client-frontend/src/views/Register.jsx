import { useState } from "react";
import { MD5 } from "crypto-js";

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
        };

        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: username,
                    email: email,
                    password: password
                })
            })
            
            if (!response.ok) {
                alert("Ocurrió un error al iniciar sesión.");
                return;
            };

            alert("Usuario registrado exitosamente.");

        } catch (error) {
            console.error(error);
        };
    };

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
};

export default Register;