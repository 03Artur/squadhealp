import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import style from './InputText.stories.sass';


import InputText from './InputText';

storiesOf("InputText", module)
    .add('default', () => <div className={style.container}> <InputText/></div>);