export interface HTMLFigureElement extends HTMLElement {
    
}

export interface HTMLArticleElement extends HTMLElement {

}

export type loadCover = {
    isCoverLoaded: boolean,
    ref: React.Ref<HTMLElement>
}

export interface handleCoverType extends loadCover {
    handleCover: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleRemove: () => void

}

export interface CoverType extends loadCover {
    image: string,
}

