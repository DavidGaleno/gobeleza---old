import { useState } from "react"
import { ActionButton } from "../ActionButton"
import { Input } from "../Input"
import styles from './styles.module.css'
import { Campo } from "../Campo"

interface Props {
    label: string
    value: string
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const ChangeDataScreen = ({ label, value, visible, setVisible }: Props) => {
    return (
        <>
            <div className={`${styles.fade} ${visible ? '' : styles.hide}`} ></div>
            <div className={`${styles.container} ${visible ? '' : styles.hide}`} >
                <Campo shortValue={false} fatherClass={styles.value} label={label} value={value} changeValue={false} />
                <Input placeholder={`Digite o novo valor do campo ${label}`} type={"text"} fatherClass={styles.value} />
                <Input placeholder="Insira sua senha" type={"password"} fatherClass={styles.value} />
                <div className={styles.buttons}>
                    <ActionButton value="Voltar ←" onClick={() => setVisible(!visible)} />
                    <ActionButton value="Confirmar →" />
                </div>
            </div>
        </>
    )
}