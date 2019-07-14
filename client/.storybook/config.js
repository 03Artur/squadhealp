import { configure, addParameters } from '@storybook/react';
const req = require.context('../src', true, /\.stories.js$/);

addParameters({
    backgrounds: [
        { name: 'twitter', value: '#00aced', default: true },
        { name: 'facebook', value: '#3b5998' },
    ],
});

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
