import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/globalStyle.css'

export const headerStyle = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: vars.space.medium,
    width: '100%',
    backgroundColor: vars.colors.whiteAlyssum,

})

export const optionStyle = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem'
})

export const buttonStyle = style({
    padding: '0.7rem 1rem',
    borderRadius: '5px',
    backgroundColor: vars.colors.strongBlue,
    color: 'white',
    border: 'none',
    cursor: 'pointer',
})