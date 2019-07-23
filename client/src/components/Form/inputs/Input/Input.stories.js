import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withStoryBookContainer from '../../../HOCs/withStorybookContainer/withStorybookContainer'


import Input from './Input';

const Elem = withStoryBookContainer(<Input pattern="^[0-9]$" placeholder="Placeholder"/>);

storiesOf("Input", module)
    .add('default', () => (
        <Elem/>

    ), {
        backgrounds: [{
            name: 'red', value: "#3ea9f5",
            default: true,
        }]
    });