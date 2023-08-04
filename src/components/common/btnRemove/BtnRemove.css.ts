import { style } from '@vanilla-extract/css'

import { vars } from '../../../styles/globalStyle.css'

import { buttonBase } from '../../editor-header/EditorHeader.css';


export const buttonRemoveStyle = style([buttonBase, {
    alignSelf: 'stretch',
    borderRadius: '0 5px 5px 0',
    background: vars.colors.white,
    display: 'flex',
    alignItems: 'center',
    gap: vars.space.small,

}])
