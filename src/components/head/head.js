import { Link } from "react-router-dom";
import whiteCard from "../../img/white-card.png";
import blackCard from "../../img/black-card.png";
import "./head.scss";
import "../../styles/btn.scss";

function HeadWrapper() {
  return (
    <>
      <section className="head">
        <div className="head__wrapper">
          <div className="head__wrapper-credit">
            <h1 className="head__wrapper-title">Лига Банк</h1>
            <p className="head__wrapper-text">Кредиты на любой случай</p>
            <Link
              className="btn head__wrapper-button"
              aria-label="Рассчитать кредит"
              to="/credit"
            >
              Рассчитать кредит
            </Link>
          </div>
          <div className="head__image-wrapper">
            <img
              alt="Белая кредитная карта"
              className="head__white-card"
              height="182"
              src={whiteCard}
              width="289"
            />
            <img
              alt="Черная кредитная карта"
              className="head__black-card"
              height="182"
              src={blackCard}
              width="289"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeadWrapper;
