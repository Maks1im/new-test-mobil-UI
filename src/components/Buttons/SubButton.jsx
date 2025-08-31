import {useState} from "react";

function Subscribe() {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        setIsSubscribed(!isSubscribed);
    };

    return (
        <button onClick={handleSubscribe} className={"subscribe-button"}>
            {isSubscribed ? 'Вы подписаны' : 'Подписаться'}
        </button>
    )
}

export default Subscribe;