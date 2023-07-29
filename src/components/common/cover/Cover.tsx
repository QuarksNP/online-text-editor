import React from "react";

import { type CoverType } from "../../../types/types";

import * as style from "./Cover.css";
import { usePointerCover } from "../../../hooks/usePointerCover";

export const Cover: React.FC<CoverType> = React.forwardRef(
  ({ image, isCoverLoaded }, coverRef) => {
    const { handleDown, handleMove, handleUp, handleLeave } =
      usePointerCover(coverRef as React.RefObject<HTMLElement>);

    const changeStyle = isCoverLoaded ? "changeCover" : "uploadCover";

    return (
      <figure className={style.figureStyle[changeStyle]} ref={coverRef}>
        <img
          src={image}
          onPointerDown={handleDown}
          onPointerMove={handleMove}
          onPointerUp={handleUp}
          onPointerLeave={handleLeave}
          draggable={false}
        />
      </figure>
    );
  }
);
