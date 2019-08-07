import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import withStorybookContainer from '../../../../HOCs/withStorybookContainer/withStorybookContainer'

import InputFile from './InputFile';

const Component = withStorybookContainer(InputFile);

storiesOf("InputFile", module)
    .add('default', () => (
        <Component/>

    ), {
        backgrounds: [{
            name: 'red', value: "#f2f2f2",
            default: true,
        }]
    });