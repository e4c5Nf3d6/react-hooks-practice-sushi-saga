import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi, moneyLeft, plates }) {
  const [startId, setStartId] = useState(1)

  function loadMore() {
    if (startId + 4 > sushis.length) {
      setStartId(1)
    } else {
      setStartId(startId => startId + 4)
    }
  }

  const sushisToDisplay = sushis.filter(sushi => {
    return sushi.id >= startId && sushi.id < startId + 4
  })

  const sushiComponents = sushisToDisplay.map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} moneyLeft={moneyLeft} plates={plates} />
  })

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onLoadMore={loadMore} />
    </div>
  );
}

export default SushiContainer;
