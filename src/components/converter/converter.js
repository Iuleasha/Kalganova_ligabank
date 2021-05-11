import "../../styles/btn.scss";
import "./converter.scss";
import "../select/select";
import Select from "../select/select";
import InputNumber from "../input-number/input-number";
import { useEffect, useState } from "react";
import InputDate from "../input-date/input-date";
import { useDispatch } from "react-redux";
import { addToHistory } from "../../reducer/reducer";
import Error from '../error/error';

const currency = ["RUB", "USD", "EUR", "GBR", "CNY"];
const max = new Date().toISOString().split("T")[0];
const min = new Date(new Date().setDate(new Date().getDate() - 7))
  .toISOString()
  .split("T")[0];

const fixedNumber = (value) => (value % 1 === 0 ? value : value.toFixed(2));

function Converter() {
  const [converterValue, setConverterValue] = useState({
    from: "",
    to: "",
    date: max,
    currencyFrom: currency[0],
    currencyTo: currency[1],
  });
  const [exchangeValue, setExchangeValue] = useState(0);
  const [convertType, changeConvertType] = useState("from");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (convertType === "from" && converterValue.from) {
      setConverterValue({
        ...converterValue,
        to: fixedNumber(converterValue.from * exchangeValue),
      });
    } else if (convertType === "to" && converterValue.to) {
      setConverterValue({
        ...converterValue,
        from: fixedNumber(converterValue.to / exchangeValue),
      });
    }
  }, [converterValue.to, converterValue.from, convertType, exchangeValue]);

  useEffect(() => {
    fetch(
        `https://free.currencylayer.com/api/v7/convert?q=${converterValue.currencyFrom}_${converterValue.currencyTo}&compact=ultra&date=${converterValue.date}&access_key=33ea9ab6aae2e1bf2d2c797dfcbbbb79`
        // `/api/?get=rates&pairs=${converterValue.currencyFrom}${converterValue.currencyTo}&date=${converterValue.date}T00:00:00&key=b57627930f85ae94505e7401a1426a7e`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.status === "500") {
            setError(
              `При запросе пары ${converterValue.currencyFrom}-${converterValue.currencyTo} произошла ошибка`
            );

            return;
          }

          setExchangeValue(
            Number(result.data[
              `${converterValue.currencyFrom}${converterValue.currencyTo}`
            ])
          );
          setError(null);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [
    converterValue.currencyTo,
    converterValue.currencyFrom,
    converterValue.date,
  ]);

  const dispatch = useDispatch();

  const updateConverterValue = ({ name, value }) => {
    setConverterValue({
      ...converterValue,
      [name]: value,
    });
  };

  const handleChangeInputNumber = ({ name, value }) => {
    updateConverterValue({ name, value });
    changeConvertType(name);
  };

  const handleSaveResult = (evt) => {
    dispatch(addToHistory(converterValue));
    evt.preventDefault();
  };

  return (
    <section className="converter__wrapper">
      <h2 className="converter__title">Конвертер валют</h2>
      <form className="converter__form-wrapper" onSubmit={handleSaveResult}>
        <div className="converter__form-name">
          <InputNumber
            name="from"
            handlerChange={handleChangeInputNumber}
            label="У меня есть"
            disabled={!!error}
            value={converterValue.from}
          />
          <Select
            options={currency.filter(
              (item) => item !== converterValue.currencyTo
            )}
            defaultValue={currency[0]}
            handlerChange={updateConverterValue}
            name="currencyFrom"
          />
          <div className="converter__form-arrow" />
          <InputNumber
            name="to"
            handlerChange={handleChangeInputNumber}
            label="Хочу приобрести"
            disabled={!!error}
            value={converterValue.to}
          />
          <Select
            options={currency.filter(
              (item) => item !== converterValue.currencyFrom
            )}
            defaultValue={currency[1]}
            handlerChange={updateConverterValue}
            name="currencyTo"
          />
        </div>
        <div className="converter__form-data">
          <InputDate
            value={max}
            name="date"
            max={max}
            min={min}
            handleSelectDate={updateConverterValue}
          />
          <button
            type="submit"
            className="btn converter__save-result"
            disabled={!converterValue.to || !converterValue.from || !!error}
          >
            Сохранить результат
          </button>
        </div>
        {error && <Error error={error}/>}
      </form>
    </section>
  );
}

export default Converter;
