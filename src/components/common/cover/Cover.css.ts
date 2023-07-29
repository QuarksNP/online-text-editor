import { styleVariants } from "@vanilla-extract/css"

const figureVariants = {
    changeCover: {
        position: 'relative',
        overflow: 'hidden',
        height: '15rem',

        '& img': {
            width: '100%',
            height: '100%',
            zIndex: '1',
            objectFit: 'cover',

            '@media screen and (min-width: 768px)': {
                height: 'auto',
                alignSelf: 'start',
                position: 'absolute',
                cursor: 'move',
            }
        },

        '@media screen and (min-width: 768px)': {
            display: 'flex',
            alignItems: "end",
            justifyContent: "end",
            cursor: 'move',

            ':hover ~ article': {
                opacity: 1,
            },
        }
    },

    uploadCover: {
        display: 'none'
    }
} as const

export const figureStyle = styleVariants(figureVariants, (style) => style)