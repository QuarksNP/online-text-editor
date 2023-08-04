export const handleResize = (setResize: React.Dispatch<React.SetStateAction<boolean>>) => {
    const width = window.innerWidth
    if(width < 1368) setResize(true)

    else setResize(false)
}