import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withStoryBookContainer from '../../../HOCs/withStorybookContainer/withStorybookContainer'


import InputText from './InputText';

const Elem = withStoryBookContainer(<InputText pattern="^[0-9]$"  placeholder="Placeholder"/>);

storiesOf("InputText", module)
    .add('default', () => (
        <Elem/>

    ), {
        backgrounds: [{
            name: 'red', value: "#3ea9f5",
            default: true,
        }]
    });