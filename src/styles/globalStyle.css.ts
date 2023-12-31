import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

const kanit = 'Kanit, sans-serif';

globalStyle('*', {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: kanit
});


export const vars = createGlobalTheme(':root', {
    colors: {
        strongBlue: '#3A49DF',
        lightBlue: '#EBEDFC',
        white: '#F9F9FA',
        whiteAlyssum: '#eFF1F1',
        lightGreen: '#e9FAFB',
        strongGreen: '#11AEA2',
        lightYellow: '#FEFBED',
        strong_Yellow: '#F6C02E',
        strongGray: '#545A61',
        opacityBlack: '#000000B3'
    },

    space: {
        none: '0',
        small: '0.5rem',
        medium: '1rem',
        large: '2rem',
        larger: '3rem',
        largest: '8rem'
    },
});
