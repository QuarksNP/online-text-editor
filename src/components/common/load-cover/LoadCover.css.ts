import { style, styleVariants, StyleRule } from "@vanilla-extract/css";
import { vars } from "../../../styles/globalStyle.css";

const articleBase = style({
    zIndex: '10',
    '& input[type=file]': {
        display: 'none'
    }
} as StyleRule)

const buttonBase = style({
    padding: '5px',
    border: 'none',
    transition: 'background ease 0.3s',
    zIndex: '10',
    cursor: 'pointer',
    color: vars.colors.strongGray,


    '&:hover':{
        backgroundColor: vars.colors.whiteAlyssum
    } ,
}as StyleRule) 

const articleVariants = {
    changeCover: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0',
        right: '0',
        margin: `0 ${vars.space.medium} ${vars.space.small} 0`,

        '@media screen and (min-width: 768px)': {
            position: 'fixed',
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

        '@media screen and (min-width: 768px)': {
            padding: '1rem 8rem',

        }
    }
} as const

const buttonVariants = {
    changeCover: {
        borderRadius: '5px 0  0  5px',
        background: vars.colors.white
    },
    uploadCover: {
        borderRadius: '5px',
        background: 'none'
    }
}

export const buttonStyle = styleVariants(buttonVariants, (style) => [
    buttonBase,
    style
]);


export const articleStyle = styleVariants(articleVariants, (style) => [
    articleBase,
    style
]);

export const labelStyle = style({
    display: 'flex',
    alignItems: 'center',
    gap: vars.space.small,
    cursor: 'pointer',
});

export const buttonRemoveStyle = style([buttonBase, {
    alignSelf: 'stretch',
    borderRadius: '0 5px 5px 0',
    borderLeft: `1px solid ${vars.colors.whiteAlyssum}`,
    background: vars.colors.white

}])
