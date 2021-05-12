import { NavLink } from "react-router-dom";
import { uniqueId } from "../../utils/utils";
import "./navigation.scss";

const navigation = [
  {
    text: "Услуги",
    url: "/services",
  },
  {
    text: "Рассчитать кредит",
    url: "/credit",
  },
  {
    text: "Конвертер валют",
    url: "/converter",
  },
  {
    text: "Контакты",
    url: "/comtacts",
  },
  {
    text: "Задать вопрос",
    url: "/faq",
  },
];

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navigation.map((item) => (
          <li key={uniqueId()} className="nav__list-item">
            <NavLink
              className="nav__list-link"
              activeClassName="nav__list-link--active"
              aria-label="Услуги"
              to={item.url}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
