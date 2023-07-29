import { createGlobalTheme } from "@vanilla-extract/css";

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
        strongGray: '#545A61'
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
