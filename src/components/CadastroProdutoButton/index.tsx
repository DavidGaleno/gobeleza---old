import styles from './styles.module.css'

interface Props {
    onClick: () => void
}

export const CadastroProdutoButton = ({ onClick }: Props) => {
    return (
        <div onClick={onClick} className={styles.container}>
            <span className={styles.plus}>+</span>
        </div>
    )
}