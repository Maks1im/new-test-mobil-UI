import {useState} from "react";
import Subscribe from "../Buttons/SubButton.jsx";

function AccountPage ({ showSubscribeButton = false }) {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        setIsSubscribed(!isSubscribed);
    };

    return (
        <>
            <header className={"header__account"}>
                <div className={"account__info-main"}>
                    <img className={"account__logo"} src={"https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"} alt="user-icon"/>
                    <div className={"account__info"}>
                        <h1 className={"username"}>username</h1>
                        <p>0 подписчиков</p>
                    </div>
                </div>
                {showSubscribeButton && (
                   <Subscribe/>
                )}
            </header>
            <hr/>
        </>
    )
}

export default AccountPage;