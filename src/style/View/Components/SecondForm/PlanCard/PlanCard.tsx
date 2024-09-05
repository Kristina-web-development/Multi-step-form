import { FC, useState } from "react";
import "./PlanCard.css";

interface IPlanCard {
  plan: {
    urlImage: string;
    tariff: string;
    priceMonth: string;
    priceYear: string;
  };
  isYearly: boolean;
  setChoosen: Function
}

const PlanCard: FC<IPlanCard> = ({
  plan,
  isYearly,
  setChoosen
}) => {
  const [selected, setSelected ] = useState<boolean>(false)

  // const choosenplan = (ev: any) => {
  //   console.log(ev)
  // }
  return (
    <div id="containericon" 
    style={{border: selected ? "1px solid blue" :"none"}}
    onClick={() => setSelected(selected === true ? false: true)}>
      <label htmlFor={plan.tariff} >
        <img
          id="icon"
          src={plan.urlImage}
          alt={plan.tariff}
          width={40}
          height={40}
        />
        <p id="tariff">{plan.tariff}</p>
        <p id="price">{isYearly ? plan.priceYear : plan.priceMonth}</p>
      </label>
      <input id={plan.tariff} type="radio" name="secondform" style={{display:"none"}}
        
      />
    </div>
  );
}

export default PlanCard;