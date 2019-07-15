import React from 'react';
import style from './withStorybookContainer.module.scss'

export default function (WrappedComponent) {

    return class Test extends React.Component {

        render() {
            return (
                <div className={style.container}>
                    {
                        WrappedComponent
                    }
                </div>
            )
        }
    }
}