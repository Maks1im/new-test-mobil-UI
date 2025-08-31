import {NavLink} from "react-router-dom"

function ModalRecommendations() {
    return (
        <nav className={"sidebar__menu"}>
            <ul className={"menu__menu__list"}>
                <li className={"menu__menu__list-item"}><NavLink to={"/recommendations"}>Рекомендации</NavLink></li>
            </ul>
        </nav>
    )
}

export default ModalRecommendations;