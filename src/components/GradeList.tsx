import React from 'react';
import styles from './GradeList.module.css';
import { GradeItem } from './GradeItem.tsx';
import { GradeListProps } from '../types.ts';

export const GradeList: React.FC<GradeListProps> = ({ grades, setFn }) => {
    return (
        <div className={styles.gradeContainer}>
            {grades.map((grade, index) => (
                <GradeItem setFn={setFn} idx={index} key={index} hasIcon={grade.subs.length > 0} grade={grade.grade} />
            ))}
        </div>
    );
};