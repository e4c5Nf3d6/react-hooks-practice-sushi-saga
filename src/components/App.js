import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [moneyLeft, setMoneyLeft] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushis(data))
  }, [])

  function eatSushi(sushi) {
    setPlates([...plates, sushi])
    setMoneyLeft(moneyLeft => moneyLeft - sushi.price)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={eatSushi} moneyLeft={moneyLeft} plates={plates} />
      <Table plates={plates} moneyLeft={moneyLeft} onSetMoneyLeft={setMoneyLeft} />
    </div>
  );
}

export default App;
