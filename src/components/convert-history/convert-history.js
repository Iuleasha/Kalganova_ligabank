import "./convert-history.scss";
import "../../styles/btn.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory, getConverterHistory } from "../../reducer/reducer";
import { uniqueId } from "../../utils/utils";

function ConvertHistory() {
  const history = useSelector(getConverterHistory);
  const dispatch = useDispatch();
  const handleClearHistory = (evt) => {
    evt.preventDefault();
    dispatch(clearHistory());
  };

  return (
    <section className="history__wrapper">
      <h2 className="history__title">История конвертация</h2>
      <div className="history__table-wrapper">
        {history.map((item) => (
          <div key={uniqueId()} className="history__table-string">
            <div className="history__table-date">{item.date}</div>
            <div className="history__table-currency">
              {item.from} {item.currencyFrom}
            </div>
            <div className="history__table-currency--arrow" />
            <div className="history__table-currency">
              {item.to} {item.currencyTo}
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn history__button"
        type="button"
        disabled={history.length === 0}
        onClick={handleClearHistory}
      >
        Очистить историю
      </button>
    </section>
  );
}

export default ConvertHistory;
