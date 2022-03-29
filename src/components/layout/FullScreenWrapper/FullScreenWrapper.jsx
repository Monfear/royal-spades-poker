import styles from './FullScreenWrapper.module.css';

import React from 'react';

export const FullScreenWrapper = ({ children, classModifier }) => {
    return (
        <>
            <div className={!classModifier ? styles.FullScreenWrapper : `${styles.FullScreenWrapper} ${styles[classModifier]}`}>{children}</div>
        </>
    );
};
