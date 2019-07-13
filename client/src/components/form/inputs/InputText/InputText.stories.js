import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputText from './InputText';

storiesOf("InputText", module)
.add('default', () => <InputText/>)