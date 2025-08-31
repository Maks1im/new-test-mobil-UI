import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <p>Извините, запрашиваемая страница не существует.</p>
                <Link to="/" className="home-link">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
}

export default NotFound;