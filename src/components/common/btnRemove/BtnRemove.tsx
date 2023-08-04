import { type BtnRemoveType } from "../../../types/types";
import * as style from "./BtnRemove.css"

import { PiTrashBold } from "react-icons/pi";

export const BtnRemove: React.FC<BtnRemoveType> = ({ isReposition, handleRemove }) => {
  if (isReposition) return;

  return (
    <button
      type="button"
      className={style.buttonRemoveStyle}
      onClick={handleRemove}
    >
      <PiTrashBold size={20} />
      Remove
    </button>
  );
};
