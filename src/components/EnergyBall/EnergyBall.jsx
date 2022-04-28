import React from "react";
import styles from './styles.module.css';

const EnergyBall = () => {
   
    const colors = ['red', 'green', 'blue', 'lime', 'yellow', 'gray'];
   
    return (
    <section className={styles.section}>
        {Array.from({length: 4}).map((item, i) => {
            const size = 48 + Math.floor(Math.random() * i * 5) + '%';
            return (
                <span key={colors[i]} className={styles.sphere} style={
                    {   
                        backgroundColor: colors[i],
                        transformOrigin: Math.floor(Math.random() * i * 8) + 37 + '%',
                        animationDuration: Math.floor(Math.random() * i * 5),
                        width: size,
                        height: size,
                    }
                }/>
            )
        })}
    </section>
)};

export { EnergyBall };