export function moveLoadCover(childElementRef: React.RefObject<HTMLElement>, coverRef: React.RefObject<HTMLElement>) {
    const childElement = childElementRef.current
    const cover = coverRef.current

    if(cover != null && childElement != null) {
        cover.appendChild(childElement)
    }
}
