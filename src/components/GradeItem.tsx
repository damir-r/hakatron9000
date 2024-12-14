import React from 'react';
import styles from './GradeItem.module.css';
import { GradeItemProps } from '../types.ts';

export const GradeItem: React.FC<GradeItemProps> = ({ grade, idx, setFn, hasIcon = true }) => {
    return (
        <>
            <div className={styles.gradeRow} onMouseOver={() => {setFn(idx)}}>
                <div className={styles.gradeText}>{grade}</div>
                <img
                    loading="lazy"
                    src="/icons/arrow.svg"
                    className={styles.gradeIcon}
                    alt=""
                    style={{ opacity: hasIcon ? 1 : 0 }}
                />
            </div>
            <div className={styles.divider} />
        </>
    );
};