import { Link } from "react-router-dom";

function LogIn() {
    return (
        <div className="Login">
            <h1>Войти</h1>
            <form className="inputsDiv">
                <div className="email">
                    <label>Email</label>
                    <input className="emailInput" placeholder="Email" />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input className="passwordInput" placeholder="Password" />
                </div>
                <button>Войти</button>
            </form>
            <div className="Link__SignUp">
                <p>Нет аккаунта?</p>
                <Link style={{textDecoration: "underline"}} to="/signup">Зарегистрироваться здесь</Link>
            </div>
        </div>
    );
}

export default LogIn;