import { Cover } from "../common/cover/Cover";
import { LoadCover } from "../common/load-cover/LoadCover";

import { useLoadCover } from "../../hooks/useLoadCover";
import { useRef, useEffect } from "react";

import { moveLoadCover } from "../../utils/moveCover";

import { headerStyle } from "./EditorHeader.css";

export const EditorHeader: React.FC = () => {
  const { handleCover, handleRemove, cover, isCoverLoaded } = useLoadCover();

  const loadCoverRef = useRef(null);
  const coverRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (isCoverLoaded) {
      moveLoadCover(loadCoverRef, coverRef);
    } else {
      moveLoadCover(loadCoverRef, headerRef);
    }
  }, [isCoverLoaded]);

  return (
    <header className={headerStyle} ref={headerRef}>
      <LoadCover
        isCoverLoaded={isCoverLoaded}
        handleCover={handleCover}
        handleRemove={handleRemove}
        ref={loadCoverRef}
      />
      <Cover image={cover} ref={coverRef} isCoverLoaded={isCoverLoaded} />
    </header>
  );
};

/*<h1>
<input type="text" placeholder="New post title here..." />
</h1>*/
