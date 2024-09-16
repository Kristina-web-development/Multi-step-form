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
  setChoosen: Function;
  getDataUser: Function;
}

const PlanCard: FC<IPlanCard> = ({
  plan,
  isYearly,
  setChoosen,
  getDataUser,
}) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div
      id="containericon"
      style={{ border: selected ? "1px solid blue" : "none" }}
      onClick={() => setSelected(selected === true ? false : true)}
    >
      <label htmlFor={plan.tariff}>
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
      <input
        onClick={getDataUser}
        id={plan.tariff}
        data-planprice={isYearly ? plan.priceYear : plan.priceMonth}
        type="radio"
        name="plan"
        style={{ display: "none" }}
      />
      {isYearly && <p>2 months free</p>}
    </div>
  );
};

export default PlanCard;
