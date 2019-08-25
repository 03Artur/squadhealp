import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withStoryBookContainer from '../HOCs/withStorybookContainer/withStorybookContainer'


import Spinner from './Spinner';

const Elem = withStoryBookContainer(Spinner);

storiesOf("Spinner", module)
    .add('default', () => (
        <Elem/>

    ), {
        backgrounds: [{
            name: 'red', value: "#3ea9f5",
            default: true,
        }]
    });