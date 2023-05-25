interface Props {
    image:string
    alt:string
    onClick?: MouseEvent
    fatherClass?: string
}
import styles from './styles.module.css'

export const LoginIcon = ({image,alt,onClick,fatherClass}:Props) => {
    return(
        <img className={`${fatherClass} ${styles.icon}`} src={image} alt={alt} />
    )
}