import { style, StyleRule } from "@vanilla-extract/css";

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

        '@media screen and (min-width: 768px)': {
            margin: '1rem 8rem'
        }
    }
} as StyleRule)