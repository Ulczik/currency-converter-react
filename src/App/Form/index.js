import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");

  const onSumit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSumit}>
      <h1 className="form__header">Kalkulator walut</h1>
      <p>
        <label>
          <span className="form__label">Kwota w zł*</span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę"
            className="form__field"
            type="number"
            step="0.01"
            min="0.01"
            required
            autoFocus
          />
        </label>
      </p>
      <p>
        <label>
          <span className="form__label">Wybierz walutę</span>
          <select
            className="form__field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </p>

      <p>
        <button className="form__button">Przelicz</button>
      </p>

      <p className="form__info">
        Kurs walut pobrano ze strony
        <a
          rel="noreferrer noopener"
          target="_blank"
          className="footer__link"
          href="https://nbp.pl/statystyka-i-sprawozdawczosc/kursy/tabela-a/"
        >
          Narodowego banku Polskiego
        </a>
      </p>

      <Result result={result}></Result>
    </form>
  );
};
