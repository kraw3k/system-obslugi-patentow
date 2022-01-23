import React, { useState, useEffect } from "react";
import { doc, onSnapshot, collection } from "@firebase/firestore";
import { db } from "../firebase.js";
import { Alert, Table } from "react-bootstrap";

const BoardView = () => {
  const [clerks, setClerks] = useState([]);
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, `numbers`),
      (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) =>
          docs.push({ ...doc.data(), id: doc.id })
        );
        setNumbers(docs);
      }
    );

    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, `clerks`),
      (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) =>
          docs.push({ ...doc.data(), id: doc.id })
        );
        setClerks(docs);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <div>
      <Table className="my-5">
        <thead>
          <tr>
            {clerks.map((el) => (
              <th>
                <h1>{el.name}</h1>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {clerks.map((el) => (
              <td>
                <Alert variant={el.currentNumber ? "success" : "warning"}>
                  <h1>{el.currentNumber || "-"}</h1>
                </Alert>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>

      <Alert variant="">
        <h1>W KOLEJCE:</h1>
      </Alert>
      <ul style={{ display: "inline-block" }}>
        {numbers.map((el) => (
          <li style={{ display: "inline-block" }} className="mx-4">
            <Alert>
              <h1>{el.number}</h1>
            </Alert>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardView;
