import React, { useState } from "react";

export const useLoadCover = () => {
    const [cover, setCover] = useState('');
    const [isCoverLoaded, setIsCoverLoad] = useState(false);
    const fileTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];


    function handleCover(event: React.ChangeEvent<HTMLInputElement>) {
        const file: File = event.target.files?.[0] || new File([], "");

        const typeFile = fileTypes.includes(file.type);

        if (typeFile) {
            const cover = URL.createObjectURL(file);
            setCover(cover);
            setIsCoverLoad(true);
        }
    }

    function handleRemove() {
        setCover('');
        setIsCoverLoad(false);
    }

    return { handleCover, handleRemove, cover, isCoverLoaded }
}