import { style, styleVariants, StyleRule } from "@vanilla-extract/css";

import { vars } from "../../styles/globalStyle.css";

export const headerStyle = style({
    position: "relative",
    
    '& input[type=text]': {
        border: 'none',
        outline: 'none',
        fontWeight: "bold",
        fontSize: "32px",
        margin: '0 1rem',

        '&::placeholder': {
            fontWeight: "bold",
            fontSize: "32px",
        },

        '@media screen and (min-width: 1368px)': {
            margin: '1rem 8rem'
        }
    }
} as StyleRule)


export const buttonBase = style({
    padding: '5px',
    border: 'none',
    transition: 'background ease 0.3s',
    zIndex: '10',
    cursor: 'pointer',
    color: vars.colors.strongGray,
    
    '&:hover': {
        backgroundColor: vars.colors.whiteAlyssum
    },
} as StyleRule)

const articleBase = style({
    zIndex: '10',
    '& input[type=file]': {
        display: 'none'
    }
} as StyleRule)


const articleVariants = {
    changeCover: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0',
        right: '0',
        margin: `0 ${vars.space.medium} ${vars.space.small} 0`,

        '@media screen and (min-width: 1368px)': {
            position: 'fixed',
            justifySelf: 'end',
            alignSelf: 'end',
            bottom: 'auto',
            right: 'auto',
            opacity: '0',
            transition: 'opacity ease 0.2s',
            borderRadius: '5px',
            margin: `0 ${vars.space.larger} ${vars.space.small} 0`,


            '&:hover': {
                opacity: '1',
            },
        }
    },

    uploadCover: {
        padding: '1rem',

        '@media screen and (min-width: 1368px)': {
            padding: '1rem 8rem',

        }
    }
} as const

export const articleStyle = styleVariants(articleVariants, (style) => [
    articleBase,
    style
]);
