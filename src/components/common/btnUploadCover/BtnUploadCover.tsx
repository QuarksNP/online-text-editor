import { type BtnUploadType } from "../../../types/types";

import { PiImagesBold } from "react-icons/pi";

import * as style from "./BtnUploadCover.css";

export const BtnUploadCover: React.FC<BtnUploadType> = ({
  isReposition,
  isCoverLoaded,
  coverVariant,
}) => {
  if (isReposition) return;

  return (
    <button type="button" className={style.buttonStyle[coverVariant]}>
      <label htmlFor="cover" className={style.labelStyle}>
        {isCoverLoaded ? (
          <PiImagesBold size={20} />
        ) : (
          <PiImagesBold size={25} />
        )}
        {isCoverLoaded ? "Change cover" : "Add a cover..."}
      </label>
    </button>
  );
};
