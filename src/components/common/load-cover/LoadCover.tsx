import React from "react";


import { handleCoverType } from "../../../types/types";

import * as style from "./LoadCover.css";

import { PiImagesBold } from "react-icons/pi";

export const LoadCover: React.FC<handleCoverType> = React.forwardRef(
  (
    { isCoverLoaded, handleCover, handleRemove },
    loadCoverRef
  ) => {
    
    const changeStyle = isCoverLoaded ? "changeCover" : "uploadCover";

    return (
      <article className={style.articleStyle[changeStyle]} ref={loadCoverRef}>
        <button type="button" className={style.buttonStyle[changeStyle]}>
          <label htmlFor="cover" className={style.labelStyle}>
            <PiImagesBold size={25} />
            {isCoverLoaded ? "Change cover" : "Add a cover..."}
          </label>
        </button>
        {isCoverLoaded && (
          <button
            type="button"
            className={style.buttonRemoveStyle}
            onClick={handleRemove}
          >
            Remove
          </button>
        )}
        <input
          id="cover"
          type="file"
          accept=".png, .jpg, .jpeg, .gif"
          onChange={handleCover}
        />
      </article>
    );
  }
);
