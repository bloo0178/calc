import React from 'react';
import styles from './Display.module.scss';

const Display = (props) => {
    return (
        <div className={styles.display}>
            {props.displayVal}
        </div>
    )
}

export default Display; 
