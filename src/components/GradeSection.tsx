import React from 'react';
import styles from './GradeSection.module.css';
import { GradeList } from './GradeList.tsx';

export const GradeSection: React.FC = () => {
    const grades = [
        { grade: "5 КЛАСС", subs: [] },
        { grade: "7 КЛАСС", subs: ["7А КЛАСС", "7Б КЛАСС"] },
        { grade: "8 КЛАСС", subs: ["8А КЛАСС", "8Б КЛАСС"] },
        { grade: "9 КЛАСС", subs: ["9А КЛАСС", "9Б КЛАСС"] },
        { grade: "10 КЛАСС", subs: ["10А КЛАСС", "10Б КЛАСС"] },
        { grade: "11 КЛАСС", subs: ["11А КЛАСС", "11Б КЛАСС"] }
    ];
    var [selectedIndex, setIndex] = React.useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <GradeList grades={grades} setFn={setIndex} />
                </div>
                <div className={styles.columnRight}>
                    <div className={styles.subgradeContainer}>
                        <div className={styles.subgradeHeader}>{grades[selectedIndex]?.subs[0] ?? "нету"}</div>
                        <div className={styles.subgradeHeader}>{grades[selectedIndex]?.subs[1] ?? "нету"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};