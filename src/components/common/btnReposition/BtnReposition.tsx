import { type BtnRepositionType } from "../../../types/types";

import { PiArrowsOutCardinalBold } from "react-icons/pi";

import { buttonStyle } from "./BtnReposition.css";

export const BtnReposition: React.FC<BtnRepositionType> = ({
  handleReposition,
  isReposition,
  isResponsive,
  positionVariant,
}) => {
  if (isResponsive) return;

  return (
    <button
      type="button"
      className={buttonStyle[positionVariant]}
      onClick={handleReposition}
    >
      <PiArrowsOutCardinalBold size={20} />
      {isReposition ? "save position" : "reposition"}
    </button>
  );
};
