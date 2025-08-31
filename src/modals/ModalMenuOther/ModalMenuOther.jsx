import {NavLink} from 'react-router-dom'

function ModalMenuOther () {
    return (
        <div className={"other"}>
            <nav className={"navbar-nav"}>
                <ul className={"navbar-nav__list"}>
                    <li className={"navbar-nav__item"}><a href={"https://t.me/Podjerjka_bot"}>Помощь</a></li>
                    <li className={"navbar-nav__item"}><a href={""}>Поддержать авторов</a></li>
                    <li className={"navbar-nav__item"}><NavLink to={"/about"}>О нас</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default ModalMenuOther