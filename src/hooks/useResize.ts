import { useState, useEffect } from "react";
import { handleResize } from "../utils/handleResize";

export const useResize = () => {
    const [responsive, setResponsive] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", () => handleResize(setResponsive));

        return () => window.removeEventListener("resize", () => handleResize(setResponsive));
    }, [])

    return { responsive }
}