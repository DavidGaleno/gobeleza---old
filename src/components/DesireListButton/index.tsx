import { useState } from 'react'
import styles from './styles.module.css'
export const DesireListButton = () => {
    const [added, setAdded] = useState(true)
    return (

        <div onClick={()=> setAdded(!added)} className={styles.ball} > {added ? <span className={styles.check}>&#10003;</span> : <span className={styles.plus}>+</span>} </div>

    )
}