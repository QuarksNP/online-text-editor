export function moveLoadCover(childElementRef, coverRef){
    const childElement = childElementRef.current
    const cover = coverRef.current

    cover.appendChild(childElement)
}
