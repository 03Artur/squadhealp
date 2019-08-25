import { configure, addParameters } from '@storybook/react';
const req = require.context('../src', true, /\.stories.js$/);
import '../src/index.css';
addParameters({
    backgrounds: [
        { name: 'default', value: '#222222', default: true },
    ],
});

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
