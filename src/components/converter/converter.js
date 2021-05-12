import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  CURRENCY,
  CURRENT_ISO_DATE,
  getMinDateFromCurrent,
} from "../../constants";
import { addToHistory } from "../../reducer/reducer";
import "../../styles/btn.scss";
import { fixedNumber } from "../../utils/utils";
import ConvertHistory from "../convert-history/convert-history";
import Error from "../error/error";
import HeadWrapper from "../head/head";
import InputDate from "../input-date/input-date";
import InputNumber from "../input-number/input-number";
import Select from "../select/select";
import "./converter.scss";

const DAYS_FROM_CURRENT = 7;

function Converter() {
  const [converterValue, setConverterValue] = useState({
    from: "",
    to: "",
    date: CURRENT_ISO_DATE,
    currencyFrom: CURRENCY[0],
    currencyTo: CURRENCY[1],
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
      `/api/v7/convert?q=${converterValue.currencyFrom}_${converterValue.currencyTo}&compact=ultra&date=${converterValue.date}&apiKey=39cb9aa860311df4bcf2`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.error) {
            setError(
              `При запросе пары ${converterValue.currencyFrom}-${converterValue.currencyTo} произошла ошибка`
            );

            return;
          }

          setExchangeValue(
            result[
              `${converterValue.currencyFrom}_${converterValue.currencyTo}`
            ][converterValue.date]
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
    <>
      <HeadWrapper />

      <section className="converter__wrapper">
        <h2 className="converter__title">Конвертер валют</h2>
        <form className="converter__form-wrapper" onSubmit={handleSaveResult}>
          <div className="converter__form-name">
            <div className="converter__input-number">
              <InputNumber
                name="from"
                handlerChange={handleChangeInputNumber}
                label="У меня есть"
                disabled={!!error}
                value={converterValue.from}
              />
            </div>
            <Select
              options={CURRENCY.filter(
                (item) => item !== converterValue.currencyTo
              )}
              defaultValue={CURRENCY[0]}
              handlerChange={updateConverterValue}
              name="currencyFrom"
            />
            <div className="converter__form-arrow" />
            <div className="converter__input-number">
              <InputNumber
                name="to"
                handlerChange={handleChangeInputNumber}
                label="Хочу приобрести"
                disabled={!!error}
                value={converterValue.to}
              />
            </div>
            <Select
              options={CURRENCY.filter(
                (item) => item !== converterValue.currencyFrom
              )}
              defaultValue={CURRENCY[1]}
              handlerChange={updateConverterValue}
              name="currencyTo"
            />
          </div>
          <div className="converter__form-data">
            <InputDate
              value={CURRENT_ISO_DATE}
              name="date"
              max={CURRENT_ISO_DATE}
              min={getMinDateFromCurrent(DAYS_FROM_CURRENT)}
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
          {error && <Error error={error} />}
        </form>
      </section>

      <ConvertHistory />
    </>
  );
}

export default Converter;
