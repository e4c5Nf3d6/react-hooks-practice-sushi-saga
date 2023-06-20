import React, {useState} from "react";

function Form({ moneyLeft, onSetMoneyLeft, onSetFormVisibility }) {
    const [moneyToAdd, setMoneyToAdd] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        onSetMoneyLeft(parseInt(moneyLeft) + parseInt(moneyToAdd))
        onSetFormVisibility(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="amount"
                type="number"
                step={1}
                placeholder="Dollars to Add"
                value={moneyToAdd}
                onChange={e => setMoneyToAdd(e.target.value)}
            />
            <input
                type="submit"
                value={"Add " + moneyToAdd + " Dollars" }
            />
        </form>
    )
}

export default Form