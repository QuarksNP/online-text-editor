import { style, styleVariants, StyleRule } from "@vanilla-extract/css"
import { vars } from "../../../styles/globalStyle.css"

export const figureStyle = style({

    position: 'relative',
    overflow: 'hidden',
    height: '15rem',

    '@media screen and (min-width: 1368px)': {
        display: 'grid',
        gridTemplateColumns: 'auto',
        cursor: 'move',

        ':hover ~ article': {
            opacity: 1,
        },
    },
} as StyleRule)

const spanBase = style({
    padding: vars.space.small,
    backgroundColor: vars.colors.opacityBlack,
    color: vars.colors.white,
    borderRadius: '5px',
    position: 'fixed',
    alignSelf: 'center',
    justifySelf: 'center',
    zIndex: '10',
})

const spanVariants = {
    visibility: 'visible',
    hidden: 'hidden',
}

export const spanStyle = styleVariants(spanVariants, (visibility) => [
    spanBase,
    { visibility } as StyleRule
])

export const imgStyle = style({

    width: '100%',
    height: '100%',
    zIndex: '1',
    objectFit: 'cover',

    '@media screen and (min-width: 1368px)': {
        height: 'auto',
        alignSelf: 'start',
        position: 'absolute',
        cursor: 'move',
    },
} as StyleRule)
