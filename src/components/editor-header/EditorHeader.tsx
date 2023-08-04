import React from "react";

import { Cover } from "../common/cover/Cover";
import { BtnUploadCover } from "../common/btnUploadCover/BtnUploadCover";
import { BtnReposition } from "../common/btnReposition/BtnReposition";
import { BtnRemove } from "../common/btnRemove/BtnRemove";

import { useLoadCover } from "../../hooks/useLoadCover";
import { usePointerCover } from "../../hooks/usePointerCover";
import { useMoveCover } from "../../hooks/useMoveCover";
import { useResize } from "../../hooks/useResize";

import { useRef } from "react";

import * as style from "./EditorHeader.css";
import {
  DragVariant,
  type CoverVariant,
  type PositionVariant,
} from "../../types/types";

export const EditorHeader: React.FC = () => {
  const loadCoverRef = useRef(null);
  const coverRef = useRef(null);
  const headerRef = useRef(null);

  const { handleCover, handleRemove, cover, isCoverLoaded, inputRef } =
    useLoadCover();
  const {
    state,
    handleDown,
    handleMove,
    handleUp,
    handleLeave,
    handleReposition,
  } = usePointerCover(coverRef as React.RefObject<HTMLElement>);

  const { isPress, isReposition } = state;

  const coverVariant: CoverVariant = isCoverLoaded
    ? "changeCover"
    : "uploadCover";
  const positionVariant: PositionVariant = isReposition
    ? "position"
    : "reposition";
  const dragVariant: DragVariant = isPress ? "hidden" : "visibility";

  useMoveCover({ isCoverLoaded, loadCoverRef, coverRef, headerRef });
  const { responsive } = useResize();

  return (
    <header className={style.headerStyle} ref={headerRef}>
      <article className={style.articleStyle[coverVariant]} ref={loadCoverRef}>
        <BtnUploadCover {...{ isReposition, isCoverLoaded, coverVariant }} />

        {isCoverLoaded && (
          <React.Fragment>
            <BtnReposition
              isResponsive={responsive}
              {...{ handleReposition, isReposition, positionVariant }}
            />
            <BtnRemove {...{ isReposition, handleRemove }} />
          </React.Fragment>
        )}
        <input
          id="cover"
          type="file"
          accept=".png, .jpg, .jpeg, .gif"
          onChange={handleCover}
          ref={inputRef}
        />
      </article>
      <Cover
        ref={coverRef}
        image={cover}
        isResponsive={responsive}
        {...{
          isReposition,
          isCoverLoaded,
          dragVariant,
          handleDown,
          handleMove,
          handleUp,
          handleLeave,
        }}
      />
    </header>
  );
};
