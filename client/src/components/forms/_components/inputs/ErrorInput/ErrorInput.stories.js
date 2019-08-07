import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withStoryBookContainer from '../../../../HOCs/withStorybookContainer/withStorybookContainer'


import ErrorInput from './ErrorInput';

const Elem = withStoryBookContainer(ErrorInput,{ pattern: "^[0-9]$", placeholder: "Placeholder", meta: {touched:false,visited:false, error:null, warning:null} });

storiesOf("ErrorInput", module)
    .add('default', () => (
        <Elem/>

    ), {
        backgrounds: [{
            name: 'red', value: "#3ea9f5",
            default: true,
        }]
    });