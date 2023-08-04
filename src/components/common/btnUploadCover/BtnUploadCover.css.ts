import { styleVariants, style } from '@vanilla-extract/css'

import { vars } from '../../../styles/globalStyle.css';

import { buttonBase } from '../../editor-header/EditorHeader.css';

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

export const labelStyle = style({
    display: 'flex',
    alignItems: 'center',
    gap: vars.space.small,
    cursor: 'pointer',
});

export const buttonStyle = styleVariants(buttonVariants, (style) => [
    buttonBase,
    style
]);