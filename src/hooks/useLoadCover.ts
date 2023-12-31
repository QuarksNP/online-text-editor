import React, { useState, useRef } from "react";

export const useLoadCover = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [cover, setCover] = useState('');
    const [isCoverLoaded, setIsCoverLoad] = useState(false);

    const fileTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

    function handleCover(event: React.ChangeEvent<HTMLInputElement>) {
        const file: File = event.target.files?.[0] || new File([], "");

        const fileType = fileTypes.includes(file.type);

        if (fileType) {
            const cover = URL.createObjectURL(file);
            setCover(cover);
            setIsCoverLoad(true);
        }
    }

    function handleRemove() {
        setCover('');
        setIsCoverLoad(false);

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }

    return {
        handleCover,
        handleRemove,
        cover,
        isCoverLoaded,
        inputRef
    }
}