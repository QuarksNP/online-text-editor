export type CoverVariant = 'changeCover' | 'uploadCover';

export type PositionVariant = 'position' | 'reposition';

export type DragVariant = 'hidden' | 'visibility'

export type CoverType = {
    isCoverLoaded: boolean,
    coverVariant: CoverVariant,
}

export type RepositionType = {
    isReposition: boolean,
    positionVariant: PositionVariant
}

export type MoveCoverType = Omit<CoverType, 'coverVariant'> & {
    loadCoverRef: React.RefObject<HTMLElement>
    coverRef: React.RefObject<HTMLElement>
    headerRef: React.RefObject<HTMLElement>
}

export type BtnUploadType = CoverType & Omit<RepositionType, 'positionVariant'>

export type BtnRepositionType = RepositionType & {
    isResponsive: boolean
    handleReposition: () => void,
}

export type BtnRemoveType = Omit<RepositionType, 'positionVariant'> & {
    handleRemove: () => void
}

export type handlePointerType = Omit<RepositionType, 'positionVariant'> & Omit<CoverType, 'coverVariant'> & {
    ref: React.Ref<HTMLElement>
    image: string,
    dragVariant: DragVariant,
    isResponsive: boolean
    handleDown: () => void
    handleMove: (event: React.PointerEvent<HTMLElement>) => void
    handleUp: () => void
    handleLeave: () => void
}

export type ActionType =
    | { type: "reposition" }
    | { type: "press" }
    | { type: "move"; payload: { clientY: number; refCurrent: HTMLElement | null } }
    | { type: "release" }
    | { type: "leave" };

export type StateType = {
    isPosition: boolean;
    isReposition: boolean;
    isPress: boolean;
    prevY: number;
};
