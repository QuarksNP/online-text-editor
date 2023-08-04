import React from "react";

import { type handlePointerType } from "../../../types/types";

import * as style from "./Cover.css";

export const Cover: React.FC<handlePointerType> = React.forwardRef(
  (
    {
      image,
      isReposition,
      isResponsive,
      isCoverLoaded,
      dragVariant,
      handleDown,
      handleMove,
      handleUp,
      handleLeave,
    },
    coverRef
  ) => {
    if (!isCoverLoaded) return;

    return (
      <figure className={style.figureStyle} ref={coverRef}>
        {isReposition && !isResponsive && (
          <span className={style.spanStyle[dragVariant]} draggable={false}>
            Drag image to reposition
          </span>
        )}
        <img
          className={style.imgStyle}
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
