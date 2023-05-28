import { useState } from "react"
import { ActionButton } from "../ActionButton"
import styles from './styles.module.css'
import { ChangeDataScreen } from "../ChangeDataScreen"
interface Props {
    label: string
    value: string
    changeValue: boolean
    fatherClass?: string

}
export const Campo = ({ label, value, changeValue, fatherClass }: Props) => {
    const [changeDataScreenVisible, setChangeDataScreenVisible] = useState(false)

    return (
        <>
            {changeValue ? <ChangeDataScreen label={label} value={value} visible={changeDataScreenVisible} setVisible={setChangeDataScreenVisible} /> : ''}
            <div className={`${styles.container} ${fatherClass}`}>
                <span className={styles.label}>{label}:</span>
                <div className={styles.valueGroup}>
                    <span className={styles.value}>{value.length <= 18 ? value : `${value.substring(0, 18)}...`}</span>
                    {changeValue ? <ActionButton onClick={() => setChangeDataScreenVisible(!changeDataScreenVisible)} fatherClass={styles.button} value={'Alterar →'} /> : ''}
                </div>
            </div>
        </>
    )
}