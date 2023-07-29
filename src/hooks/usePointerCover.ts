import { useState, useRef } from 'react'

export const usePointerCover = (coverRef: React.RefObject<HTMLElement>) => {
    const [isPosition, setIsPosition] = useState(false);
    const prevYRef = useRef(0);

    function handleDown() {
        setIsPosition(true);
    }


    function handleMove(event: React.PointerEvent<HTMLImageElement>) {
        const currentY = event.clientY;
        const refCurrent = coverRef.current

        if (!isPosition) return;

        if (currentY < prevYRef.current && refCurrent != null) {
            refCurrent.scrollTop += 3;


        } else if (refCurrent != null) {
            refCurrent.scrollTop -= 3;
        }

        prevYRef.current = currentY;
    }

    function handleUp() {
        setIsPosition(false)
    }

    function handleLeave() {
        setIsPosition(false)
    }

    return { handleDown, handleMove, handleUp, handleLeave }
}