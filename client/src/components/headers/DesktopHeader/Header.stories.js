import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Header from './DesktopHeader'






storiesOf("Header", module)
    .add('default', () => (
            <Header/>
    ), {
        backgrounds: [{
            name: 'red', value: "#3ea9f5",
            default: true,
        }]
    });