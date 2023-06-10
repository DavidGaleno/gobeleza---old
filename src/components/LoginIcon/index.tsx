interface Props {
    image:string
    alt:string
    onClick?: MouseEventHandler<HTMLImageElement>
    fatherClass?: string
}
import { MouseEventHandler } from 'react'
import styles from './styles.module.css'

export const LoginIcon = ({image,alt,onClick,fatherClass}:Props) => {
    return(
        <img onClick={onClick} className={`${fatherClass} ${styles.icon}`} src={image} alt={alt} />
    )
}