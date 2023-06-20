import React, {useState} from "react";
import Form from "./Form";

function Table({ plates, moneyLeft, onSetMoneyLeft }) {
  const [formVisibility, setFormVisibility] = useState(false)

  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${moneyLeft} remaining!
        <br />
        {formVisibility ? <Form moneyLeft={moneyLeft} onSetMoneyLeft={onSetMoneyLeft} onSetFormVisibility={setFormVisibility} /> : <button onClick={() => setFormVisibility(true)}>Add More</button>}
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
