import React, {useState} from "react";

function Sushi({ sushi, onEatSushi, moneyLeft, plates }) {
  const [isEaten, setIsEaten] = useState(plates.includes(sushi))

  function handleEatSushi() {
    if (sushi.price <= moneyLeft) {
      if (isEaten === false) {
        onEatSushi(sushi)
      }
      setIsEaten(true)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
