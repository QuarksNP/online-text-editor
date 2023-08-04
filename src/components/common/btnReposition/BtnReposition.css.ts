import { styleVariants } from '@vanilla-extract/css'
import { vars } from '../../../styles/globalStyle.css'

import { buttonBase } from '../../editor-header/EditorHeader.css';

const buttonVariants = {

    position: {
        borderRadius: '5px',
        border: 'none',
        backgroundColor: vars.colors.white,
        display: 'flex',
        alignItems: 'center',
        gap: vars.space.small,


    },

    reposition: {
        borderLeft: `1px solid ${vars.colors.whiteAlyssum}`,
        borderRight: `1px solid ${vars.colors.whiteAlyssum}`,
        backgroundColor: vars.colors.white,
        display: 'flex',
        alignItems: 'center',
        gap: vars.space.small,

    }
} as const

export const buttonStyle = styleVariants(buttonVariants, (style) => [
    buttonBase,
    style
])