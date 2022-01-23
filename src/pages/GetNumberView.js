import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { registerNumber } from "../dbFunctions";

import { Alert } from "react-bootstrap";

const GetNumberView = () => {
  const [number, setNumber] = useState(null);
  const register = () => {
    const number = Math.floor(Math.random() * (1000 - 1)) + 1;
    registerNumber(number);
    setNumber(number);
  };

  const confirm = () => {
    setNumber(null);
  };

  return (
    <div className="my-5">
      {number && (
        <Alert>
          <h1>Twój numer:</h1>
        </Alert>
      )}
      {!number && (
        <Alert>
          <h1>Dzień dobry!</h1>
          <h2>Kliknij przycisk poniżej aby pobrać swój numer.</h2>
        </Alert>
      )}

      {number && (
        <Alert variant="warning" style={{ display: "inline-block" }}>
          <h1>{number}</h1>
        </Alert>
      )}
      {number && (
        <Alert variant="">
          <h2>Bieżący status możesz sprawdzać na tablicy.</h2>
        </Alert>
      )}
      {number ? (
        <Button variant="success" size="lg" onClick={confirm}>
          Potwierdzam
        </Button>
      ) : (
        <Button variant="success" size="lg" onClick={register}>
          Pobierz numer
        </Button>
      )}
    </div>
  );
};

export default GetNumberView;
