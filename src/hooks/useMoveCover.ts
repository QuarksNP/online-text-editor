import { useEffect } from 'react'

import { moveLoadCover } from '../utils/moveCover';

import { type MoveCoverType } from '../types/types';

export const useMoveCover = ({ isCoverLoaded, loadCoverRef, coverRef, headerRef }: MoveCoverType) => {
    useEffect(() => {
        if (isCoverLoaded) {
            moveLoadCover(loadCoverRef, coverRef);
        } else {
            moveLoadCover(loadCoverRef, headerRef);
        }

    }, [coverRef, headerRef, isCoverLoaded, loadCoverRef]);
}