import React from 'react';
import _styles from './withStorybookContainer.module.scss'

export default function (WrappedComponent, props, backgroundColor = '#333') {

    return class Test extends React.Component {

        render() {
            return (
                <div className={_styles.myContainer} style={{backgroundColor}}>

                    <WrappedComponent {...props}/>

                </div>
            )
        }
    }
}