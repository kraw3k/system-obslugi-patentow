import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import { doc, onSnapshot, collection } from "@firebase/firestore";
import { db } from "../firebase.js";

import { Button } from "react-bootstrap";
import { endVisit, startVisit } from "../dbFunctions.js";

import { Alert } from "react-bootstrap";

const ClerkView = () => {
  const { clerkNumber } = useParams();

  const [clerk, setClerk] = useState({});

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, `clerks/${clerkNumber}`), (doc) => {
      setClerk({ ...doc.data(), id: doc.id });
    });

    return unsubscribe;
  }, [clerkNumber]);

  const handleVisitEnd = () => {
    endVisit(clerkNumber);
  };

  const handleVisitStart = () => {
    startVisit(clerkNumber);
  };

  return (
    <div className="my-5">
      <Alert>
        <h1>{clerk.name}</h1>
      </Alert>
      <div className="my-5">
        {clerk.currentNumber ? (
          <h2>
            Aktualnie obsługiwany numer:{" "}
            <Alert variant="success" style={{ display: "inline-block" }}>
              {clerk.currentNumber}
            </Alert>
          </h2>
        ) : (
          <h2>Obecnie nie obsługujesz żadnej osoby</h2>
        )}
      </div>
      {clerk.currentNumber ? (
        <Button variant="danger" size="lg" onClick={handleVisitEnd}>
          Zakończ wizytę
        </Button>
      ) : (
        <Button variant="success" size="lg" onClick={handleVisitStart}>
          Zaproś kolejną osobę
        </Button>
      )}
    </div>
  );
};

export default ClerkView;
