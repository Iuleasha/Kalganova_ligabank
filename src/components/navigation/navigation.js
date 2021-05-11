import {Link} from 'react-router-dom';
import './navigation.scss';

function Navigation() {
    return (
        <nav className="main__nav">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <Link className="nav__list-link" aria-label="Услуги" to="#">Услуги</Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__list-link" aria-label="Рассчитать кредит" to="#">Рассчитать кредит</Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__list-link nav__list-link--active" aria-label="Конвертер валют" to="#">Конвертер
                        валют</Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__list-link" aria-label="Контакты" to="#">Контакты</Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__list-link" aria-label="Задать вопрос" to="#">Задать вопрос</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
