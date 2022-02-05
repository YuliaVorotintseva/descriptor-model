import React from 'react'
import styleClasses from './Loader.module.css'

const Loader = props => (
    <div className={styleClasses.center}>
        <div className={styleClasses.Loader}>
            <div /><div />
        </div>
    </div>
)

export default Loader