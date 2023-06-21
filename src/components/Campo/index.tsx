import { useState } from "react"
import { ActionButton } from "../ActionButton"
import styles from './styles.module.css'
import { ChangeDataScreen } from "../ChangeDataScreen"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { UpgradeContaScreen } from "../UpgradeContaScreen"
interface Props {
    label: string
    value: string
    changeValue: boolean
    fatherClass?: string
    shortValue?: boolean

}
export const Campo = ({ label, value, changeValue, fatherClass, shortValue }: Props) => {
    const [changeDataScreenVisible, setChangeDataScreenVisible] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    window.addEventListener('resize', () => {
        setWindowWidth(window.outerWidth)
    })

    return (
        <>
            {changeValue && label === 'Tipo Conta' && <UpgradeContaScreen label={label} value={value} visible={changeDataScreenVisible} setVisible={setChangeDataScreenVisible} />}
            {changeValue && label !== 'Tipo Conta' && <ChangeDataScreen label={label} value={value} visible={changeDataScreenVisible} setVisible={setChangeDataScreenVisible} />}
            <div className={`${styles.container} ${fatherClass}`}>
                <span className={styles.label}>{label}:</span>
                {label.toLocaleLowerCase() === 'senha' ?

                    <div className={styles.valueGroup}>
                        {showPassword ? <FontAwesomeIcon className={styles.passwordIcon} size="3x" icon={faEye} onClick={() => setShowPassword(!showPassword)} /> : <FontAwesomeIcon className={styles.passwordIcon} onClick={() => setShowPassword(!showPassword)} size="3x" icon={faEyeSlash} />

                        }
                        {changeValue ? <ActionButton type="button" onClick={() => setChangeDataScreenVisible(!changeDataScreenVisible)} fatherClass={styles.button} value={'Alterar →'} /> : ''}
                    </div>

                    :
                    <div className={styles.valueGroup}>
                        {windowWidth <= 425 ? <span className={styles.value}>{shortValue === false ? value : value.length <= 10 ? value : `${value.substring(0, 10)}...`}</span>
                            :
                            <span className={styles.value}>{value}</span>
                        }

                        {changeValue ? <ActionButton type="button" onClick={() => setChangeDataScreenVisible(!changeDataScreenVisible)} fatherClass={styles.button} value={'Alterar →'} /> : ''}
                    </div>
                }
            </div>
        </>
    )
}