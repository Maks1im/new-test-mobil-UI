import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="SignUp">
            <h1>Регестрация</h1>
            <form className="inputsDiv">
                <div className="name">
                    <label>@name</label>
                    <input className="nameInput" placeholder="@name" />
                </div>
                <div className="email">
                    <label>Email</label>
                    <input className="emailInput" placeholder="Email" />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input className="passwordInput" placeholder="Password" />
                </div>
                <button>Зарегистрироваться</button>
            </form>
            <div style={{display: "flex", "flex-direction": "row"}} className={"Link__SignUp"}>
                <p>Есть аккаунт?</p>
                <Link style={{textDecoration: "underline"}} to="/login">Войти здесь</Link>
            </div>
        </div>
    );
}

export default SignUp;