import { ActionButton } from '../ActionButton'
import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import { StarCount } from '../StarCount'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const AvaliacaoScreen = ({ visible, setVisible }: Props) => {
    return (
        <>
            <div className={`${styles.fade} ${visible ? '' : styles.hide}`}></div>
            <div className={`${styles.container} ${visible ? '' : styles.hide}`}>
                <img className={styles.logo} src={logo} alt="GoBeleza" />
                <StarCount visible={visible} setVisible={setVisible} />
                <div className={styles.buttons}>
                    <ActionButton type="submit" value="Avaliar →" />
                    <ActionButton type="button" value="Voltar ←" onClick={() => setVisible(!visible)} />
                </div>
            </div >
        </>
    )
}