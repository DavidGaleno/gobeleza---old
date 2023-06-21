import { ActionButton } from '../ActionButton'
import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import { Iitem } from '../../interfaces/Iitem'
import { StarEvaluate } from '../StarEvaluate'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
    item: Iitem
}
export const AvaliacaoScreen = ({ visible, setVisible, item }: Props) => {
    return (
        <>
            <div className={`${styles.fade} ${visible ? '' : styles.hide}`}></div>
            <div className={`${styles.container} ${visible ? '' : styles.hide}`}>
                <img className={styles.logo} src={logo} alt="GoBeleza" />
                <StarEvaluate item={item} />
                <div className={styles.buttons}>
                    <ActionButton type="button" value="Voltar ←" onClick={() => setVisible(!visible)} />
                </div>
            </div >
        </>
    )
}